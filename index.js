const express=require('express');
const path=require('path')
const app= express();
const fs=require('fs');
const { log } = require('console');

app.set( "view engine","ejs");
app.use( express.json());
app.use(express.urlencoded( {extended:true}));

app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
  fs.readdir(`./files`,function(err,files){
    res.render ("index",{files:files});
  })
});


app.get('/edit/:filename',function(req,res){
  res.render('edit',{filename:req.params.filename});

});


app.get('/file/:filename',function(req,res){
  fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
    res.render('show', {filename:req.params.filename,filedata: filedata});
  })
});

app.post('/edit', function (req, res) {
  // Ensure both previous and new names exist
  if (req.body.previous && req.body.new) {
    const previousPath = `./files/${req.body.previous}`;
    const newPath = `./files/${req.body.new}`;

    fs.rename(previousPath, newPath, function (err) {
      if (err) {
        console.error('Error renaming file:', err);
        return res.status(500).send('Error renaming file');
      }
      res.redirect("/"); // Correct usage of res.redirect
    });
  } else {
    // Handle missing fields
    res.status(400).send('Both previous and new filenames are required');
  }
});


app.post('/create', function(req, res) {
  // Ensure 'title' exists and is not empty
  if (req.body.title && req.body.title.trim() !== "") {
    // Clean the title by removing spaces before saving it as filename
    const fileName = req.body.title.split(' ').join('') + '.txt';

    fs.writeFile(`./files/${fileName}`, req.body.details, function(err) {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.redirect("/");
      console.log(req.body);
    });
  } else {
    // If 'title' is undefined or empty, return an error response
    res.status(400).send('Title is required');
  }
});


app.listen(3000);
