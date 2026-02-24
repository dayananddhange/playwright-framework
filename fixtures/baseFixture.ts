import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { envConfig } from '../config/env';
import { Logger } from '../utils/logger';

type PageFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loginAsStandardUser: () => Promise<void>;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  loginAsStandardUser: async ({ loginPage }, use) => {
    await use(async () => {
      Logger.info('Logging in as standard user');
      await loginPage.goto();
      await loginPage.login(envConfig.username, envConfig.password);
    });
  }
});

export { expect };
