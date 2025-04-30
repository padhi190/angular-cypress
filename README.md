# AngularCypress

This repository contains an Angular project configured with Cypress for end-to-end testing, specifically set up to be used in Gitpod.

## Quick Start with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/padhi190/angular-cypress)

Clicking the button above will start a new Gitpod workspace with everything pre-configured. The workspace will:
1. Automatically install all dependencies
2. Start the Angular development server
3. Set up Cypress for testing

## Development Environment

Once the Gitpod workspace is ready:
- The Angular application will be running at port 4200
- A preview window will automatically open showing the running application
- All necessary development tools will be pre-installed

## Running Tests

This project uses Cypress for end-to-end testing. To run the tests:

```bash
# Run Cypress tests in headless mode
npm run cypress:run

or

npx cypress run
```

## Project Structure

```
angular-cypress/
├── src/                  # Angular application source code
├── cypress/             
│   ├── e2e/             # Cypress test files
│   ├── fixtures/        # Test data
│   └── support/         # Test support files
└── ...
```

## Available Commands

- `npm start` - Start the development server
- `npm run cypress:run` - Run Cypress tests in headless mode

## Technical Stack

- Angular 19.2.0
- Cypress 14.3.2 

## Need Help?

If you encounter any issues:
1. Check the terminal output for any error messages
2. Ensure all services are running (Angular server, Cypress)
3. Review the Gitpod logs for any initialization issues

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Cypress Documentation](https://docs.cypress.io)
- [Gitpod Documentation](https://www.gitpod.io/docs)
