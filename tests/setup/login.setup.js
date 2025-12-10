const { chromium } = require('@playwright/test');
const {
  LoginPage
} = require('../../pages');
const testData = require('../../config/testData');

module.exports = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Initialize Login class
  const login = new LoginPage(page);

  // Perform login flow
  await page.goto(testData.BASE_URL);
  await login.login(
    testData.credentials.username_standard_user,
    testData.password
  );
  await login.verifyLoginSuccess();

  // Save login/session state
  await context.storageState({ path: 'loginState.json' });

  await browser.close();
};