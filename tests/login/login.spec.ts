import { test, expect } from '../../fixtures/baseFixture';

test.describe('Login flow', () => {
  test('@smoke should login successfully with valid credentials', async ({ loginAsStandardUser, inventoryPage }) => {
    await loginAsStandardUser();
    await inventoryPage.assertLoaded();
  });

  test('should show an error for invalid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'wrong_password');
    await expect(loginPage.errorMessage).toContainText('Epic sadface');
  });
});
