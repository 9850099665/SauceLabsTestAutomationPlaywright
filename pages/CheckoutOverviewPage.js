import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async completeCheckout() {
    await expect(this.page.locator('.summary_total_label')).toBeVisible();
    await this.page.click('#finish');
  }

  async verifyConfirmation() {
    await expect(this.page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  }
}