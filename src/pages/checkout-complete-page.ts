import { BasePage } from "./base-page";

export class CheckoutCompletePage extends BasePage { 
    thankYouMessage = this.page.locator('//h2[@class="complete-header"]'); 
    backHomeButton = this.page.locator('//button[@id="back-to-products"]'); 

    async getThankYouMessage() {
        return await this.thankYouMessage.innerText();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }
}