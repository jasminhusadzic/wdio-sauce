import { generateUser } from "../../utils/user-generator";
import { CheckoutPage } from "./checkout-page";

export class CheckoutFirst extends CheckoutPage {
  constructor() {
    super("checkout-step-one.html");
  }

  get firstNameInput() {
    return $('[data-test="firstName"]');
  }

  get secondNameInput() {
    return $('[data-test="lastName"]');
  }

  get zipInput() {
    return $('[data-test="postalCode"]');
  }

  get continueCheckoutButton() {
    return $('[data-test="continue"]')
  }

  setCheckoutInformations = async () => {
    const user = await generateUser();
    (await this.firstNameInput).waitForDisplayed();
    (await this.firstNameInput).clearValue();
    (await this.firstNameInput).setValue(user.firstName);
    (await this.secondNameInput).waitForDisplayed();
    (await this.secondNameInput).clearValue();
    (await this.secondNameInput).setValue(user.lastName);
    (await this.zipInput).waitForDisplayed();
    (await this.zipInput).clearValue();
    (await this.zipInput).setValue(user.zip);
  };

  continueCheckout = async () => {
    (await this.continueCheckoutButton).waitForClickable();
    (await this.continueCheckoutButton).click();
  }
}
