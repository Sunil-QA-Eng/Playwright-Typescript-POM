import { BasePage } from "./base-page"; 

export class CheckoutStepTwoPage extends BasePage { 

    itemName = this.page.locator('//div[@class="inventory_item_name"]');
    finishButton = this.page.locator('//button[@id="finish"]'); 
    
    async getItemName() { 
        return await this.itemName.innerText(); 
    }
    
    async clickFinishButton() {
        await this.finishButton.click();
    }
}