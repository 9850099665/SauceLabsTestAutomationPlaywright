export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '.shopping_cart_link';
    this.itemsLocator = page.locator('.inventory_item');
  }

  async addRandomItems(count) {
    const total = await this.itemsLocator.count();
    if (count > total) count = total;

    // generate unique random indices
    const indices = [];
    while (indices.length < count) {
      const r = Math.floor(Math.random() * total);
      if (!indices.includes(r)) indices.push(r);
    }

    for (const idx of indices) {
      // use nth to get locator for the particular item, then find its Add to cart button
      const addBtn = this.itemsLocator.nth(idx).locator('button:has-text("Add to cart")');
      await addBtn.click();
    }
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}