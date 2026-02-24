import { test } from '../fixtures/baseFixture';

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
});
