import { Page } from "@playwright/test";

class AchatPage{
    readonly page : Page

    constructor(page:Page){
        this.page=page
    }

    elements = {
        article1: ()=> this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
        article2: ()=> this.page.locator('#add-to-cart-sauce-labs-fleece-jacket'),
        cart: ()=> this.page.locator('.shopping_cart_link'),
        checkoutButton: ()=> this.page.getByRole('button', {name: 'checkout'}),
        firstName: ()=> this.page.getByPlaceholder('First Name'),
        lastName: ()=> this.page.getByPlaceholder('Last Name'),
        CodePostal: ()=> this.page.getByPlaceholder('Zip/Postal Code'),
        continueButton: ()=> this.page.locator('#continue'),
        finishButton: ()=> this.page.locator('#finish'),
        successMessage: ()=> this.page.getByText('Thank you for your order!')
    }

    async ajoutArticle(){
        await this.elements.article1().click()
        await this.elements.article2().click()
    }

    async ouvrirCart(){
        await this.elements.cart().click()
    }

    async clicCheckout(){
        await this.elements.checkoutButton().click()
    }

    async remplirInfos(firstName, lastName, codePostal){
        await this.elements.firstName().fill(firstName)
        await this.elements.lastName().fill(lastName)
        await this.elements.CodePostal().fill(codePostal)
    }

    async clicContinue(){
        await this.elements.continueButton().click()
    }

    async clicFinish(){
        await this.elements.finishButton().click()
    }

    async succesMessage(){
        return this.elements.successMessage()
    }
}

export default AchatPage;