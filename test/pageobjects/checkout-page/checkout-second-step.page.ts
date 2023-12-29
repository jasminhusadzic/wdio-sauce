import { getNumberFromString } from "../../utils/helper-functions";
import { CheckoutPage } from "./checkout-page";

export class CheckoutSecond extends CheckoutPage {
  constructor() {
    super("checkout-step-two.html");
  }

  get itemTotal() {
    return $(".summary_subtotal_label");
  }

  get tax() {
    return $(".summary_tax_label");
  }

  get total() {
    return $(".summary_total_label");
  }

  getItemTotalValue = async () => {
    const total = await (await this.itemTotal).getText();
    return await getNumberFromString(total);
  };

  getTaxValue = async () => {
    const total = await (await this.tax).getText();
    return await getNumberFromString(total);
  };

  getTotalValue = async () => {
    const total = await (await this.total).getText();
    return await getNumberFromString(total);
  };

  shouldTotalPriceBeCorrect = async () => {
    const itemTotal = await this.getItemTotalValue();
    const tax = await this.getTaxValue();
    const total = await this.getTotalValue();
    const expectedValue = parseFloat(itemTotal) + parseFloat(tax);
    const actualValue = parseFloat(total);

    await expect(actualValue).toEqual(expectedValue);
  };
}
