import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import LogoutPage from '../pages/logout.page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.saisirUsername('standard_user')
    await loginPage.saisirPassword('secret_sauce')
    await loginPage.clicLogin()
});

test('test de déconnexion', async ({page}) => {
    const logoutPage = new LogoutPage(page)
    await logoutPage.clicMenu()
    await logoutPage.clicLogout()

    await expect(await logoutPage.loginLogo()).toHaveText('Swag Labs')
})