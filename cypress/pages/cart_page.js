export class CartPage {

    //Element locators of Cart Page
    cartPage_proceedToCheckout_button = '.col-sm-6 > .btn'
    cartPage_registerLogin = '.modal-body > :nth-child(2) > a > u'
    cartPage_orderComment = '.form-control'
    cartPage_placeOrder = ':nth-child(7) > .btn'

    //Methods to interact with the Cart Page
    clickProceedToCheckout() {
        cy.get(this.cartPage_proceedToCheckout_button).click()
    }
    clickRegisterLogin() {
        cy.get(this.cartPage_registerLogin).click()
    }
    enterComment() {
        cy.get(this.cartPage_orderComment).clear().type('No comments to add.') 
    }
    clickPlaceOrder() {
        cy.get(this.cartPage_placeOrder).click()
    }
}