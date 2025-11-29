import { expect } from '@playwright/test';
const constants = require('../config/constants');

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.summaryTotalLabel = page.locator('//div[@class="summary_total_label"]');
    this.finishButton = page.locator('//button[@id="finish"]');
    this.orderSuccessMessage = page.locator('.complete-header');
  }

  async completeCheckout() {
    await expect(this.summaryTotalLabel).toBeVisible();
    await this.finishButton.click();
  }

  async verifyConfirmation() {
    await expect(this.orderSuccessMessage).toHaveText(constants.messages.orderSuccess);
  }
}