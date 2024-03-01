export class ContactUsPage {

    //Element locators of Contact Us Page
    contactUsPage_name = '[data-qa="name"]'
    contactUsPage_email = '[data-qa="email"]'
    contactUsPage_subject = '[data-qa="subject"]'
    contactUsPage_message = '[data-qa="message"]'
    contactUsPage_submit_button = '[data-qa="submit-button"]'
    contactUsPage_home = '#form-section > .btn'

    //Methods to interact with the Contact Us Page
    enterName() {
        cy.get(this.contactUsPage_name).clear().type('Pablo') 
    }
    enterEmail(email) {
        cy.get(this.contactUsPage_email).clear().type(email) 
    }
    enterSubject() {
        cy.get(this.contactUsPage_subject).clear().type('test') 
    }
    enterMessage() {
        cy.get(this.contactUsPage_message).clear().type('Happy test') 
    }
    clickSubmit() {
        cy.get(this.contactUsPage_submit_button).click()
    }
    clickHome() {
        cy.get(this.contactUsPage_home).click()
    }
}