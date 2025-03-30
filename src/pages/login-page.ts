import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    userNameField = this.page.locator('//input[@id="user-name"]');
    passwordField = this.page.locator('//input[@id="password"]');
    loginButton = this.page.locator('//input[@id="login-button"]');
    errorMessage = this.page.locator('//h3[@data-test="error"]');

    async gotoLoginPage() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}

