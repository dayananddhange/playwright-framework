# Playwright TypeScript Automation Framework

A scalable, clean-architecture Playwright framework using:
- **Playwright Test runner**
- **Page Object Model (POM)**
- **Reusable custom fixtures**
- **Environment-based execution** (`dev`, `qa`, `prod`)
- **Retry logic**
- **HTML + Allure reporting**

## Folder Structure

```text
playwright-framework/
├── config/
│   └── env.ts
├── fixtures/
│   └── baseFixture.ts
├── pages/
│   ├── BasePage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── tests/
│   ├── baseTest.ts
│   └── login/
│       └── login.spec.ts
├── utils/
│   ├── logger.ts
│   └── testData.ts
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm test
```

### Run by Environment

```bash
npm run test:dev
npm run test:qa
npm run test:prod
```

Environment is controlled via `TEST_ENV` and mapped in `config/env.ts`.

## Smoke Execution

```bash
npm run test:smoke
```

## Reports

### HTML Report

Generated automatically at `playwright-report/`.

```bash
npx playwright show-report
```

### Allure Report

```bash
npm run allure:generate
npm run allure:open
```

## Design Highlights

- **POM** keeps locators/actions encapsulated in page classes.
- **Base page abstraction** centralizes common actions (`click`, `type`, visibility checks).
- **Custom fixtures** provide reusable objects and workflows (`loginAsStandardUser`).
- **Environment config** isolates credentials and URLs per environment.
- **Retry, trace, screenshot, and video** settings improve resiliency and triage.
- **Clean architecture approach** separates test intent, page behavior, and utilities.

## Example Test Covered

- Successful login with reusable `loginAsStandardUser` fixture.
- Negative login assertion for invalid credentials.
