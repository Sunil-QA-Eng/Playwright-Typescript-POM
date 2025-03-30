import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { InventoryPage } from "./inventory-page";
import { CartPage } from "./cart-page"; 
import { CheckoutStepOnePage } from "./checkout-step-one-page";
import { CheckoutStepTwoPage } from "./checkout-step-two-page";
import { CheckoutCompletePage } from "./checkout-complete-page";

export const Pages = (page: Page) => {
  return {
    loginPage: new LoginPage(page),
    inventoryPage: new InventoryPage(page),
    cartPage: new CartPage(page),
    checkoutStepOnePage: new CheckoutStepOnePage(page),
    checkoutStepTwoPage: new CheckoutStepTwoPage(page),
    checkoutCompletePage: new CheckoutCompletePage(page)
  };
}