# Node.js Demo App with CI/CD Pipeline

A simple Node.js application that demonstrates a complete CI/CD pipeline using GitHub Actions and Docker.

## How It Works

- **Push to main** → triggers pipeline
- **Installs Node.js dependencies**
- **Runs tests** (`npm test`)
- **Builds Docker image**
- **Logs in to Docker Hub using repo secrets**
- **Pushes the image tagged as `latest` and with the commit SHA**

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/bindushree047/nodejs-demo-app-main.git
   cd nodejs-demo-app
