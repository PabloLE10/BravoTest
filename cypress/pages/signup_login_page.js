export class SignupLoginPage {

    //Element locators of Signup/Login Page
    signupLoginPage_name = '[data-qa="signup-name"]'
    signupLoginPage_email = '[data-qa="signup-email"]'
    signupLoginPage_signup = '[data-qa="signup-button"]'
    signupLoginPage_gender = '#id_gender1'
    signupLoginPage_password = '[data-qa="password"]'
    signupLoginPage_day = '[data-qa="days"]'
    signupLoginPage_month = '[data-qa="months"]'
    signupLoginPage_year = '[data-qa="years"]'
    signupLoginPage_firstName = '[data-qa="first_name"]'
    signupLoginPage_lastName = '[data-qa="last_name"]'
    signupLoginPage_address = '[data-qa="address"]'
    signupLoginPage_country = '[data-qa="country"]'
    signupLoginPage_state = '[data-qa="state"]'
    signupLoginPage_city = '[data-qa="city"]'
    signupLoginPage_zipcode = '[data-qa="zipcode"]'
    signupLoginPage_mobileNumber = '[data-qa="mobile_number"]'
    signupLoginPage_createAccount = '[data-qa="create-account"]'
    signupLoginPage_continue = '[data-qa="continue-button"]'
    signupLoginPage_loginEmail = '[data-qa="login-email"]'
    signupLoginPage_loginPassword = '[data-qa="login-password"]'
    signupLoginPage_loginButton = '[data-qa="login-button"]'

    //Methods to interact with the Signup/Login Page
    enterName(name) {
        cy.get(this.signupLoginPage_name).clear().type(name) 
    }
    enterEmail(email) {
        cy.get(this.signupLoginPage_email).clear().type(email) 
    }
    clickSignup() {
        cy.get(this.signupLoginPage_signup).click()
    }
    clickGender() {
        cy.get(this.signupLoginPage_gender).click()
    }
    enterPassword(password) {
        cy.get(this.signupLoginPage_password).clear().type(password) 
    }
    clickDay() {
        cy.get(this.signupLoginPage_day).select('1')
    }
    clickMonth() {
        cy.get(this.signupLoginPage_month).select('10')
    }
    clickYear() {
        cy.get(this.signupLoginPage_year).select('1995')
    }
    enterFirstName() {
        cy.get(this.signupLoginPage_firstName).clear().type('Pablo') 
    }
    enterLastName() {
        cy.get(this.signupLoginPage_lastName).clear().type('Lopez') 
    }
    enterAddress() {
        cy.get(this.signupLoginPage_address).clear().type('First street') 
    }
    enterCountry() {
        cy.get(this.signupLoginPage_country).select('United States') 
    }
    enterState() {
        cy.get(this.signupLoginPage_state).clear().type('Florida') 
    }
    enterCity() {
        cy.get(this.signupLoginPage_city).clear().type('Miami') 
    }
    enterZipcode() {
        cy.get(this.signupLoginPage_zipcode).clear().type('10101') 
    }
    enterMobileNumber() {
        cy.get(this.signupLoginPage_mobileNumber).clear().type('12341234') 
    }
    clickCreateAccount() {
        cy.get(this.signupLoginPage_createAccount).click()
    }
    clickContinue() {
        cy.get(this.signupLoginPage_continue).click()
    }
    enterLoginEmail(email) {
        cy.get(this.signupLoginPage_loginEmail).clear().type(email) 
    }
    enterLoginPassword(password) {
        cy.get(this.signupLoginPage_loginPassword).clear().type(password) 
    }
    clickLoginButton() {
        cy.get(this.signupLoginPage_loginButton).click()
    }
}