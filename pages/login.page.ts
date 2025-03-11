import { Page } from "@playwright/test";

class LoginPage{
    readonly page : Page

    constructor(page:Page){
        this.page=page
    }

    elements={
        username: ()=>this.page.locator('#user-name'),
        password: ()=>this.page.locator('#password'),
        submit: ()=>this.page.getByRole('button', {name:'Login'}),
        errorMessage: ()=>this.page.getByText('Epic sadface: Username and password do not match any user in this service')
    }

    async saisirUsername(username: string){
        await this.elements.username().fill(username)
    }
    async saisirPassword(password: string){
        await this.elements.password().fill(password)
    }
    async clicLogin(){
        await this.elements.submit().click()
    }
    async errorMessage(){
        return this.elements.errorMessage();
    }

}
export default LoginPage;