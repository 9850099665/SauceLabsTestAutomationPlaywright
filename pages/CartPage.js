import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('//button[@id="checkout"]');
    this.cartTitle = page.locator('//span[@class="title"]');
  }

  async proceedToCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }

  async verifyOnCartPage() {
    await expect(this.cartTitle).toHaveText('Your Cart');
  }
}