import { test } from '@playwright/test';
const testData = require('../config/testData');
const constants = require('../config/constants');
import {
  LoginPage,
  ProductsPage,
  CartPage,
  CheckoutPage,
  CheckoutOverviewPage
} from '../pages/index.js';

test('User logins with test credentials, adds products to cart with 3 random items and checkouts', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const overview = new CheckoutOverviewPage(page);

  await page.goto(testData.BASE_URL);
  await login.login(testData.credentials.username_standard_user, testData.password);
  await login.verifyLoginSuccess();

  await products.addRandomItems(3);
  await products.goToCart();

  await cart.proceedToCheckout();
  await checkout.fillCheckoutDetails(
    testData.customerCheckoutDetails.firstName,
    testData.customerCheckoutDetails.lastName,
    testData.customerCheckoutDetails.postalCode
  );

  await overview.completeCheckout();
  await overview.verifyConfirmation();
});

test('Locked out user should not be able to login', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto(testData.BASE_URL);
  await login.login(testData.credentials.username_locked_out_user, testData.password);
  await login.assertLoginFailure(constants.messages.loginFailureMessageLockedOutUser);
});
