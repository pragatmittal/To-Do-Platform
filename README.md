# File Manager Application

A simple web application built with Node.js and Express that allows users to manage files through a web interface.

## Features

- View files in a directory
- Edit file names
- Navigate through directories
- Clean and minimalist UI using Tailwind CSS

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd file-manager
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the application:
```bash
npm start
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

## Deployment on Render

### Configuration

1. **Root Directory**: Leave empty to use repository root

2. **Build Command**:
```bash
npm install --production
```

3. **Start Command**:
```bash
node index.js
```

### Troubleshooting Deployment

If you encounter any deployment issues:

1. Verify all dependencies are properly listed in `package.json`
2. Check the deployment logs for specific error messages
3. Ensure the start command matches your main file name
4. Make sure all required dependencies are installed during the build step

### Required Dependencies

The application requires the following main dependencies:
- express
- ejs

These are automatically installed during the build process through `package.json`.

## Project Structure

```
├── views/
│   ├── edit.ejs      # File editing view
│   └── show.ejs      # File listing view
├── index.js          # Main application file
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Tailwind CSS (via CDN)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.