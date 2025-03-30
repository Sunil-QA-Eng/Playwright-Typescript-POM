import { expect, test } from '@playwright/test';
import { Pages } from '../../pages/pages';
import * as data from './data/this.json';


test('Login with valid credentials', async ({ page }) => {
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.login(data.validData.userName, data.validData.password);
    await expect(page).toHaveURL('/inventory.html');
    await expect(await pages.inventoryPage.getSwagLabsLogo()).toBe('Swag Labs');
});

test('Login with invalid credentials', async ({ page }) => { 
    const pages = Pages(page);
    await pages.loginPage.gotoLoginPage();
    await pages.loginPage.login(data.invalidData.userName, data.invalidData.password);
    await expect(page).toHaveURL('/');
    await expect(await pages.loginPage.getErrorMessage()).toBe(data.errorMessage);
});
