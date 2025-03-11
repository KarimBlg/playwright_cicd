import { Page } from "@playwright/test";

class LogoutPage{
    readonly page : Page

    constructor(page:Page){
        this.page=page
    }

    elements = {
        menuButton: ()=> this.page.locator('#react-burger-menu-btn'),
        logoutBar: ()=> this.page.locator('#logout_sidebar_link'),
        loginLogo: ()=> this.page.locator('.login_logo')
    }

    async clicMenu(){
        await this.elements.menuButton().click()
    }
    async clicLogout(){
        await this.elements.logoutBar().click()
    }
    async loginLogo(){
        return this.elements.loginLogo()
    }

}
export default LogoutPage;