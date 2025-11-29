const { expect } = require('@playwright/test');

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
  }

  async login(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

  //Validate successful login
  async verifyLoginSuccess() {
    await this.page.waitForSelector('.title');  // Wait for Products page title
    const title = await this.page.locator('.title').textContent();
    expect(title).toBe('Products');
  }
}