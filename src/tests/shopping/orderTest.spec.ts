import { expect, test } from '@playwright/test';
import { Pages } from '../../pages/pages';
import * as loginData from '../login/data/this.json';
import * as shoppingData from '../shopping/data/this.json'

test.beforeEach('Login with valid credentials', async ({ page }) => {
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.login(loginData.validData.userName, loginData.validData.password);
    await expect(page).toHaveURL('/inventory.html');
});

test('Successfully placing an order for a product', async ({ page }) => { 
    const pages = Pages(page);
    
    await pages.inventoryPage.addBackPackToCart();
    await pages.cartPage.clickCheckOutButton();
    await pages.checkoutStepOnePage.fillCheckoutForm(shoppingData.firstName, shoppingData.lastName, shoppingData.postalCode);
    await pages.checkoutStepOnePage.clickOnContinueButton();
    await expect(await pages.checkoutStepTwoPage.getItemName()).toBe(shoppingData.itemName);
    await pages.checkoutStepTwoPage.clickFinishButton();
    await expect(await pages.checkoutCompletePage.getThankYouMessage()).toBe(shoppingData.messages.success);
});

test(' Verify that the customer is unable to place an order with incomplete information', async ({ page }) => {
    const pages = Pages(page);
    
    await pages.inventoryPage.addBackPackToCart();
    await pages.cartPage.clickCheckOutButton();
    await pages.checkoutStepOnePage.fillCheckoutForm(shoppingData.firstName, shoppingData.lastName, '');
    await pages.checkoutStepOnePage.clickOnContinueButton();
    await expect(await pages.checkoutStepOnePage.postalCodeField).toBeVisible();
    await expect(await pages.checkoutStepOnePage.postalCodeField).toHaveAttribute('placeholder', shoppingData.messages.postalCodeErrorMessage);
});
