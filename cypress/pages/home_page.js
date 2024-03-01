export class HomePage {

    //Element locators of Home Page
    homePage_FancyTop = ':nth-child(10) > .product-image-wrapper > .choose > .nav > li > a'
    homePage_Header_Cart = '.shop-menu > .nav > :nth-child(3) > a'
    homePage_Header_Logout = '.shop-menu > .nav > :nth-child(4) > a'
    homePage_Header_image = 'a > img'
    homePage_Header_contactUs = ':nth-child(9) > a'

    //Methods to interact with the Home Page
    clickFancyTop() {
        cy.get(this.homePage_FancyTop).click()
    }
    clickCartButton() {
        cy.get(this.homePage_Header_Cart).click()
    }
    clickLogoutButton() {
        cy.get(this.homePage_Header_Logout).click()
    }
    validateSuccessfulLogin(){
        cy.get(this.homePage_Header_image).should('be.visible')
    }
    clickContactUsButton() {
        cy.get(this.homePage_Header_contactUs).click()
    }
}