import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
});

test.describe('login tests', ()=>{
    test('user correct password correct', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.saisirUsername('standard_user')
        await loginPage.saisirPassword('secret_sauce')
        await loginPage.clicLogin()

        await expect(page.locator('.title')).toHaveText('Products')

    })

    test('user correct password incorrect', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.saisirUsername('standard_user')
        await loginPage.saisirPassword('secret_ce')
        await loginPage.clicLogin()

        await expect(await loginPage.errorMessage()).toBeVisible

    })

    test('user incorrect password correct', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.saisirUsername('std_user')
        await loginPage.saisirPassword('secret_sauce')
        await loginPage.clicLogin()

        await expect(await loginPage.errorMessage()).toBeVisible

    })
})