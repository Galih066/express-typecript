# Express TypeScript Boilerplate 🚀

A modern, production-ready boilerplate for Node.js applications using Express and TypeScript. This template provides a solid foundation for building scalable and maintainable web applications with type safety.

## ✨ Features

- **TypeScript Support**: Full TypeScript support with proper configuration
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **Environment Variables**: Built-in support for environment variables using dotenv
- **Development Tools**: Hot-reloading with nodemon for a better development experience
- **Production Ready**: Includes build and start scripts for production deployment
- **Clean Architecture**: Well-organized project structure for scalability

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd express-typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📝 Available Scripts

- `npm run dev` - Starts the development server with hot-reloading
- `npm run build` - Builds the project for production
- `npm start` - Runs the production server
- `npm run clean` - Removes the build directory

## 🏗️ Project Structure

```
express-typescript/
├── src/               # Source files
├── dist/              # Compiled JavaScript files
├── .env              # Environment variables
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore rules
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project documentation
```

## 📦 Dependencies

### Production Dependencies
- express - Web framework
- dotenv - Environment variables management
- rimraf - Cross-platform tool for removing files

### Development Dependencies
- typescript - JavaScript with syntax for types
- ts-node - TypeScript execution engine
- nodemon - Development auto-reloading
- @types/express - Type definitions for Express
- @types/node - Type definitions for Node.js

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- TypeScript team for bringing type safety to JavaScript
- All contributors who help improve this project
