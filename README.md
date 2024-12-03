# API Test Project

This project contains automated tests for the JSONPlaceholder API (https://jsonplaceholder.typicode.com/).

## Technologies Used

* **Jest:** JavaScript testing framework.
* **SuperTest:** Library for making HTTP requests and testing APIs.

## Installation

1. Clone the repository: `git clone <REPOSITORY_URL>`
2. Install the dependencies: `npm install`

## Running the Tests

To run all tests, use the command:

```bash
npm run test
Test Reports
This project uses jest-html-reporter to generate an HTML report of the tests. After running the tests, the report will be generated in the relatorio-api.html file.

Debugging the Tests
Jest offers several options for debugging tests:

1. Using Visual Studio Code:

Set breakpoints in your code.
Run the tests in debug mode (through the "Debug Test" option in the test file's context menu or using the VS Code launch configuration).
2. Using Node.js:

Run Jest with the --inspect-brk flag:
Bash
node --inspect-brk node_modules/.bin/jest
Use o código com cuidado.

Access Chrome DevTools (chrome://inspect) and attach to the Node.js process.
3. Using console.log:

Add console.log in your code to print values and information during test execution.