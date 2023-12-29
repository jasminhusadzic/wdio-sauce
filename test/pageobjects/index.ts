import { HomePage } from "./home-page/home.page";
import { LoginPage } from "./login-page/login.page";
import { InventoryPage } from "./inventory-page/inventory.page";
import { CartPage } from "./cart-page/cart-page";
import { CheckoutFirst } from "./checkout-page/checkout-first-step.page";
import { CheckoutSecond } from "./checkout-page/checkout-second-step.page";

export const homePage = new HomePage();
export const loginPage = new LoginPage();
export const inventoryPage = new InventoryPage();
export const cartPage = new CartPage();
export const checkoutFirstStepPage = new CheckoutFirst();
export const checkoutSecondStepPage = new CheckoutSecond();
