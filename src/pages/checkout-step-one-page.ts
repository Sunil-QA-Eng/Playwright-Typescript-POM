import { BasePage } from './base-page';

export class CheckoutStepOnePage extends BasePage {
    firstNameField = this.page.locator('//input[@id="first-name"]');
    lastNameField = this.page.locator('//input[@id="last-name"]');
    postalCodeField = this.page.locator('//input[@id="postal-code"]');
    continueButton = this.page.locator('//input[@id="continue"]');

    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
        await this.continueButton.click();
    }
}