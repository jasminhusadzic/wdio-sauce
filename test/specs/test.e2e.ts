import { cartPage, checkoutFirstStepPage, checkoutSecondStepPage, inventoryPage, loginPage } from "../pageobjects";
import { Credentials } from "../utils/enums/credentials";
import { Products } from "../utils/enums/products";

describe("add to cart", () => {
  before("login to application", async () => {
    await loginPage.open();
    await loginPage.login({
      username: Credentials.STANDARD_USER,
      password: Credentials.PASSWORD,
    });
  });

  it("should be able to add product to cart", async () => {
    await inventoryPage.shouldBeOnPage();

    await inventoryPage.addToCart(Products.SAUCE_LABS_BACKPACK);
    await inventoryPage.clickOnCart();

    await cartPage.shouldBeOnPage();
    await cartPage.shouldHaveProduct(Products.SAUCE_LABS_BACKPACK);
    await cartPage.clickCheckout();

    await checkoutFirstStepPage.shouldBeOnPage();
    await checkoutFirstStepPage.setCheckoutInformations();
    await checkoutFirstStepPage.continueCheckout();

    await checkoutSecondStepPage.shouldBeOnPage();
    await checkoutSecondStepPage.shouldTotalPriceBeCorrect();
  });
});
