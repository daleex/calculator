# Math Operations Library

Simple Node.js project providing basic math operations with full Jest test coverage and GitHub Actions CI/CD integration.

## Features

- Basic math functions: addition, subtraction, multiplication, division, power
- Unit tests for 100% coverage (using Jest)
- Automatic testing on every `push` and `pull_request` via GitHub Actions
- Coverage reports saved as downloadable artifacts

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Running Tests](#running-tests)
4. [Code Coverage](#code-coverage)
5. [CI/CD with GitHub Actions](#cicd-with-github-actions)

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/daleex/ssgs-calc.git
    cd ssgs-calc
    ```

2. Install the dependencies using npm:

    ```bash
    npm install
    ```

    This will install all the required packages as specified in `package.json`.

---

## Usage

Run the CLI calculator:

```bash
npm start
```
Follow the prompts in the terminal to perform basic math operations.

You can also use the math functions directly in your project by importing them:

```js
const { sum, diff, multiply, divide, pow } = require('./src/math');

console.log(sum(1, 2));       // 3
console.log(diff(5, 3));      // 2
console.log(multiply(4, 6));  // 24
console.log(divide(10, 2));   // 5
console.log(pow(2, 3));       // 8
```

## Running Tests

```bash
npm test
```
- This runs all unit tests and generates a coverage report.
- A summary will appear in the terminal.

## Code Coverage

After running npm test, a folder named coverage/ will be generated. It contains an HTML report.

To view it:

1. Open coverage/lcov-report/index.html in your browser.
2. You'll see a visual breakdown of which lines and functions are tested.

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow located at .github/workflows/node.js.yml.

It automatically:

- Runs tests and generates coverage on every push and pull_request.
- Uploads the full coverage report as an artifact (downloadable from the GitHub Actions page).

You can find the latest runs and reports under the Actions tab of the repository.