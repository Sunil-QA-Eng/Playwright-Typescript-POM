import { BasePage } from "./base-page"; 

export class CartPage extends BasePage { 
    
    checkoutButton = this.page.locator('//button[@id="checkout"]'); 
    
    async clickCheckOutButton() {
        await this.checkoutButton.click();
    }   
}
