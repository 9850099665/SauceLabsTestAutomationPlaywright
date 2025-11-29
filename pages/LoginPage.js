const { expect } = require('@playwright/test');

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('//input[@id="user-name"]');
    this.password = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="login-button"]');
    this.productsPageTitle = page.locator('//span[@class="title"]');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  //Validate successful login
  async verifyLoginSuccess() {
    await expect(this.productsPageTitle).toBeVisible();
    await expect(this.productsPageTitle).toHaveText('Products');
  }
}