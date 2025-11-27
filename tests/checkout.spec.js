import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CheckoutOverviewPage } = require('../pages/CheckoutOverviewPage');

test('User logins with test credentials, adds products to cart with 3 random items and checkouts', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const overview = new CheckoutOverviewPage(page);

  await page.goto('https://www.saucedemo.com/');
  await login.login('standard_user', 'secret_sauce');

  await products.addRandomItems(3);
  await products.goToCart();

  await cart.proceedToCheckout();
  await checkout.fillCheckoutDetails('John', 'Doe', '12345');

  await overview.completeCheckout();
  await overview.verifyConfirmation();
});
