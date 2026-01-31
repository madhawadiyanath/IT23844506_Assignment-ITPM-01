# 🏆 ITPM Assignment 01 - Playwright Automation Testing

## 👨‍🎓 Student Information
- **Name:** Madhawa Diyanath
- **IT Number:** IT23844506
- **Module:** Information Technology Project Management
- **Assignment:** 01 - Playwright Testing Project

---

## 📖 Introduction
This repository contains a comprehensive Playwright automation testing suite for a web application, developed as part of the ITPM module assignment. The project demonstrates best practices in automated testing, reporting, and configuration.

## 📋 Project Overview
- **Framework:** Playwright
- **Test Cases:** 31 (Functional & UI)
- **Reporting:** HTML report generated after each run
- **Config:** Custom Playwright configuration for parallel execution and browser support

## ✨ Features
- Automated Singlish to Sinhala conversion tests
- UI and functional coverage
- Parallel test execution
- HTML test reports
- Easy setup and execution

## 🚀 Quick Setup

### Prerequisites
- Node.js (v16+)
- npm (or yarn)

### Installation Steps
```bash
# 1. Clone the repository
git clone https://github.com/madhawadiyanath/IT23844506_Assignment-ITPM-01.git

# 2. Navigate to the project directory
cd IT23844506_Assignment-ITPM-01

# 3. Install dependencies
npm install

# 4. Install Playwright browsers
npx playwright install
```

## 🧑‍💻 Usage Instructions
To run all tests and generate a report:
```bash
npx playwright test
```
After running, view the HTML report:
```bash
npx playwright show-report
```
The report will open in your browser, or you can manually open `playwright-report/index.html`.

## 🧪 Test Structure
- All test cases are in the `tests/` folder (see `example.spec.ts`).
- Each test covers a unique scenario for Singlish to Sinhala conversion.
- Tests use Playwright's best practices for selectors and assertions.

## 📊 Test Results & Reporting
- Test results are saved in the `test-results/` folder.
- HTML reports are generated in the `playwright-report/` folder.
- For failed tests, error context is available in `test-results/<test-folder>/error-context.md`.

## ⚙️ Configuration
- Main config: `playwright.config.ts`
- Custom settings for parallelism, retries, and browser projects
- Easily modify config for different environments

## 🛠️ Troubleshooting
- If tests fail, check:
  - Node.js version (should be 16+)
  - Playwright browsers installed (`npx playwright install`)
  - Dependencies installed (`npm install`)
- For more details, see error-context files in `test-results/`

## 📚 References
- [Playwright Documentation](https://playwright.dev/)
- [Assignment Guidelines](your-assignment-link-here)
- [Node.js Documentation](https://nodejs.org/)

## 🙌 Acknowledgements
- Developed by Madhawa Diyanath for ITPM Assignment 01
- Special thanks to module instructors and Playwright community

