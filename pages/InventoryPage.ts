import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly inventoryContainer: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async assertLoaded(): Promise<void> {
    await expect(this.inventoryContainer).toBeVisible();
    await expect(this.pageTitle).toHaveText('Products');
  }
}
