export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('//input[@id="first-name"]');
    this.lastName = page.locator('//input[@id="last-name"]');
    this.postalCode = page.locator('//input[@id="postal-code"]');
    this.continueButton = page.locator('//input[@id="continue"]');
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
  }
}