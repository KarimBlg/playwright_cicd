import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import AchatPage from '../pages/achat.page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.saisirUsername('standard_user')
    await loginPage.saisirPassword('secret_sauce')
    await loginPage.clicLogin()
});

test('test e2e', async ({page}) => {
    const achatPage = new AchatPage(page)
    await achatPage.ajoutArticle()
    await achatPage.ouvrirCart()
    await achatPage.clicCheckout()
    await achatPage.remplirInfos('karim', 'blg', '75016')
    await achatPage.clicContinue()
    await achatPage.clicFinish()

    await expect(await achatPage.succesMessage()).toHaveText('Thank you for your order!')

})