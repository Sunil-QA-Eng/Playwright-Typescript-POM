import { BasePage } from "./base-page"; 

export class CheckoutStepTwoPage extends BasePage { 
    finishButton = this.page.locator('//button[@id="finish"]'); 
    
    async clickFinishButton() {
        await this.finishButton.click();
    }
}