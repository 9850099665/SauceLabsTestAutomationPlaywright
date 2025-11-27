export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutBtn);
  }
}