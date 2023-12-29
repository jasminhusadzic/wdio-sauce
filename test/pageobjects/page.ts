import { browser } from "@wdio/globals";

export default class Page {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  get shopingCart() {
    return $("#shopping_cart_container");
  }

  open = async (path?: string) => {
    return browser.url(path || this.url);
  };

  shouldBeOnPage = async (withPath?: string) => {
    const urlPath = withPath || this.url;
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/${urlPath}`);
  };

  clickOnCart = async () => {
    (await this.shopingCart).waitForDisplayed();
    (await this.shopingCart).click();
  };
}
