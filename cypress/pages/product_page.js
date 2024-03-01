export class ProductPage {

    //Element locators of Product Page
    productPage_quantity_id = '#quantity'
    productPage_addToCart = ':nth-child(5) > .btn'
    productPage_viewCart = 'u'

    //Methods to interact with the Product Page
    enterQuantity(){
        cy.get(this.productPage_quantity_id).clear().type('5') 
    }
    clickAddToCart(){
        cy.get(this.productPage_addToCart).click()
    }
    clickViewCart(){
        cy.get(this.productPage_viewCart).click()
    }
} 