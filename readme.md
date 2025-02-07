
# Tech Quiz Test Suite CI/CD Pipeline

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The Tech Quiz Test Suite CI/CD Pipeline is designed to automate the testing and deployment of the Tech Quiz Test Suite web application. This pipeline ensures that the application is consistently tested and deployed with each code change.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [CI/CD Pipeline](#cicd-pipeline)
- [Features](#features)
- [Deployed Page](#deployed-page)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pink727/CI-CD_pipiline.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CI-CD_pipiline
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run start:dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## CI/CD Pipeline

The CI/CD pipeline is configured using GitHub Actions. The configuration files are located in the `.github/workflows` directory.

### Workflow Configuration

1. **Test Workflow**: This workflow runs Cypress tests on every pull request to the `develop` branch.
   ```yaml
   name: Run Cypress Tests

   on:
     pull_request:
       branches:
         - develop

   jobs:
     test:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install

         - name: Run Cypress tests
           run: npm run test-component
   ```

2. **Deploy Workflow**: This workflow deploys the application to Render on successful pushes to the `main` branch.
   ```yaml
   name: Deploy to Render

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install

         - name: Build project
           run: npm run build

         - name: Deploy to Render
           env:
             RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
             RENDER_SERVICE_ID: ${{ secrets.RENDER_SERVICE_ID }}
           run: |
             curl -X POST -H "Accept: application/json" \
                  -H "Authorization: Bearer $RENDER_API_KEY" \
                  -d '' https://api.render.com/deploy/srv-${{ secrets.RENDER_SERVICE_ID }}/deploys
   ```

## Features

- Automated testing with GitHub Actions.
- Continuous deployment to Render.

## Deployed Page

[Deployed Page](https://ci-cd-pipiline.onrender.com/)

## Technologies Used

- GitHub Actions
- Node.js
- Render

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

## Contributing

Base files were provided by © 2024 edX Boot Camps

## Questions

For any questions, please contact me with the information below:

GitHub: [Pink727](https://github.com/pink727)

Email: doc72789@gmail.com

____________________________________
© 2025 Pink727. All Rights Reserved.
