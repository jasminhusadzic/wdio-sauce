import Page from "../page";

export class CartPage extends Page {
  constructor() {
    super("cart.html");
  }

  get checkoutButton() {
    return $('[data-test="checkout"]')
  }

  getProduct = async (productName: string) => {
    return $(`div.inventory_item_name=${productName}`);
  };

  shouldHaveProduct = async (productName: string) => {
    const addedProduct = await this.getProduct(productName);
    await expect(addedProduct).toBeDisplayed();
  };

  clickCheckout = async () => {
    (await (this.checkoutButton)).waitForDisplayed();
    (await (this.checkoutButton)).click();
  }
}
