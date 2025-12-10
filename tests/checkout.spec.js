import { test } from '@playwright/test';
import {
  LoginPage,
  ProductsPage,
  CartPage,
  CheckoutPage,
  CheckoutOverviewPage
} from '../pages/index.js';
const testData = require('../config/testData');

test('User logins with test credentials, adds products to cart with 3 random items and checkouts', async ({ page }) => {
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const overview = new CheckoutOverviewPage(page);

  await page.goto('/inventory.html');
  await products.addRandomItems(3);
  await products.goToCart();

  await cart.verifyOnCartPage();
  await cart.proceedToCheckout();

  await checkout.fillCheckoutDetails(
    testData.customerCheckoutDetails.firstName,
    testData.customerCheckoutDetails.lastName,
    testData.customerCheckoutDetails.postalCode
  );

  await overview.completeCheckout();
  await overview.verifyConfirmation();
});
