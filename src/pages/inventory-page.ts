import { BasePage } from "./base-page";

export class InventoryPage extends BasePage {

    addToCart = this.page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
    cartIcon = this.page.locator('//a[@class="shopping_cart_link"]');
    swagLabsLogo = this.page.locator('//div[@class="app_logo"]');

    async addBackPackToCart() {
        await this.addToCart.click();
        await this.cartIcon.click();
    }

    async getSwagLabsLogo() {
        return await this.swagLabsLogo.innerText();
    }
}