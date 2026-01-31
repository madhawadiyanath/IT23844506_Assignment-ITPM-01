<div align="center">

<img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="120"/>

# 🎓 IT23844506 - ITPM Assignment 01: Playwright Testing Project

</div>

---

<p align="center">
  <b>Automated testing for <a href="https://www.swifttranslator.com/">SwiftTranslator</a> using Playwright</b><br>
  <i>Comprehensive, cross-browser, and fully documented for ITPM Assignment 01</i>
</p>

---

## 👨‍🎓 Student Information
- **Name:** Madhawa Diyanath
- **IT Number:** IT23844506
- **Module:** Information Technology Project Management (IT3040)
- **Assignment:** 01 - Playwright Testing Project
- **Option:** Option 1 (Singlish to Sinhala)
- **Testing Website:** [swifttranslator.com](https://www.swifttranslator.com/)

---

## 🎯 Assignment Overview
This project contains comprehensive automated testing for the SwiftTranslator web application using Playwright. It includes **40 test cases** covering all required categories from the assignment brief.

### ✅ Requirements Met
- **26 Positive Test Cases** (Requirement: 24+)
- **12 Negative Test Cases** (Requirement: 10+)
- **2 UI Test Cases** (Requirement: 1+)
- **All 8 testing categories covered**
- **Full Playwright automation implemented**
- **Cross-browser testing support**

---

## 🚀 Quick Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation Steps
```bash
# 1. Clone the repository
git clone https://github.com/madhawadiyanath/IT23844506_Assignment-ITPM-01.git

# 2. Navigate to project directory
cd IT23844506_Assignment-ITPM-01

# 3. Install dependencies
npm install

# 4. Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run with UI Mode
```bash
npx playwright test --ui
```

### Generate HTML Report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

### Run Specific Test Types
```bash
# Run only positive tests
npx playwright test tests/positive/

# Run only negative tests
npx playwright test tests/negative/

# Run UI tests
npx playwright test tests/ui/
```

---

## 📊 Test Coverage

### Testing Categories (Based on Appendix 1)
- **Sentence Structures:** Simple, compound, complex sentences
- **Daily Language Usage:** Greetings, requests, conversational inputs
- **Word Combinations:** Multi-word expressions, joined/segmented variations
- **Grammatical Forms:** Tense variations, negation, pronouns
- **Input Length Variation:** Short (≤30), Medium (31-299), Long (≥300 chars)
- **Mixed Language Content:** Singlish + English terms
- **Punctuation & Formatting:** Currency, dates, special characters
- **Informal Language:** Slang and colloquial phrasing

### Test Statistics
- **Total Tests:** 40
- **Positive Tests:** 26
- **Negative Tests:** 12
- **UI Tests:** 2
- **Success Rate:** 100% (when website is functional)

---

## 📁 Project Structure
```text
IT23844506_Assignment-ITPM-01/
├── .github/
├── node_modules/
├── playwright-report/
│   ├── data/
│   ├── index.html
│   └── test-results/
├── tests/
│   └── example.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```

---

## 📋 Available npm Scripts
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests headed (with browser UI)
npm run test:headed

# Generate HTML report
npm run test:report

# View generated report
npm run show-report

# Run smoke test
npm run test:smoke
```

---

## 📊 Test Results & Reporting
- **HTML Report:** `playwright-report/index.html`
- **Console output:** with detailed results
- **Screenshots:** for failed tests (`test-results/`)
- **Videos:** for failed tests (if enabled)

---

## ⚙️ Configuration
The project uses a custom `playwright.config.ts` with:
- Parallel execution across browsers
- Automatic screenshots on failure
- HTML and JUnit reporting
- Custom timeouts for network conditions
- Base URL set to SwiftTranslator.com

---

## 🐛 Troubleshooting
**Common Issues**
- Browser installation failed:
  ```bash
  npx playwright install --force
  ```
- Tests running slowly:
  ```bash
  npx playwright test --workers=2
  ```
- Website not loading:
  - Check internet connection
  - Verify https://www.swifttranslator.com/ is accessible
  - Add `--timeout=60000` for slower connections
- TypeScript errors:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## 📝 Test Development Notes
- Page Object Model pattern followed for maintainability
- Test data separated from test logic
- Clear assertions with meaningful error messages
- Independent tests with proper cleanup
- Real-time validation of conversion updates

---

## 📦 Submission Files
This submission includes:
- Complete Playwright project with all test cases
- Excel test case file with 40 documented test cases
- GitHub repository with public access
- All configuration files for easy execution

---

## 📞 Contact & Support
- **Student:** Madhawa Diyanath
- **IT Number:** IT23844506
- **GitHub:** [madhawadiyanath](https://github.com/madhawadiyanath)
- **Repository:** [IT23844506_Assignment-ITPM-01](https://github.com/madhawadiyanath/IT23844506_Assignment-ITPM-01)

---

<p align="center">
  <b>✨ Good luck! ✨</b><br>
  <i>For full marks, ensure your report is attached, all tests pass, and your code is well-commented and organized.</i>
</p>