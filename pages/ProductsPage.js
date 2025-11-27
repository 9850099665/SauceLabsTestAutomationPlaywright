export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '.shopping_cart_link';
  }

  async addRandomItems(count) {
    const items = await this.page.$$('.inventory_item');
    const randomItems = items.sort(() => 0.5 - Math.random()).slice(0, count);

    for (const item of randomItems) {
      await item.locator('button:has-text("Add to cart")').click();
      //await this.item.locator('button:has-text("Add to cart")').click();
    }
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}