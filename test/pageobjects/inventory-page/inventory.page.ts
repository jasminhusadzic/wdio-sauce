import { convertToPath } from "../../utils/helper-functions";
import Page from "../page";

export class InventoryPage extends Page {
  constructor() {
    super("inventory.html");
  }

  getDesiredProduct = async (productName: string) => {
    return $(`[data-test='add-to-cart-${convertToPath(productName)}']`);
  };

  getRemoveButton = async (productName: string) => {
    return $(`[data-test='remove-${convertToPath(productName)}']`);
  };

  addToCart = async (product: string) => {
    const desiredProduct = await this.getDesiredProduct(product);
    await desiredProduct.waitForDisplayed();
    await desiredProduct.click();
    await this.shouldRemoveButtonBeAvailable(product);
  };

  shouldRemoveButtonBeAvailable = async (product: string) => {
    await this.getRemoveButton(product);
  };
}
