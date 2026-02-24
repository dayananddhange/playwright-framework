import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { envConfig, envName } from './config/env';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL: envConfig.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000
  },
  metadata: {
    environment: envName
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
