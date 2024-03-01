export class PaymentPage {

    //Element locators of Payment Page
    paymentPage_CardName = '[data-qa="name-on-card"]'
    paymentPage_CardNumber = '[data-qa="card-number"]'
    paymentPage_CardCvc = '[data-qa="cvc"]'
    paymentPage_CardExpMonth = '[data-qa="expiry-month"]'
    paymentPage_CardExpYear = '[data-qa="expiry-year"]'
    paymentPage_PayAndConfirm = '[data-qa="pay-button"]'

    //Methods to interact with the Payment Page
    enterCardName() {
        cy.get(this.paymentPage_CardName).clear().type('Pablo Lopez') 
    }
    enterCardNumber() {
        cy.get(this.paymentPage_CardNumber).clear().type('1111 2222 3333 4444') 
    }
    enterCardCvc() {
        cy.get(this.paymentPage_CardCvc).clear().type('123') 
    }
    enterCardExpMonth() {
        cy.get(this.paymentPage_CardExpMonth).clear().type('09') 
    }
    enterCardExpYear() {
        cy.get(this.paymentPage_CardExpYear).clear().type('2032') 
    }
    clickPayAndConfirm() {
        cy.get(this.paymentPage_PayAndConfirm).click()
    }
}