/// <reference types="cypress" />
import { HomePage } from "../pages/home_page"
import { ProductPage } from "../pages/product_page"
import { CartPage } from "../pages/cart_page"
import { SignupLoginPage } from "../pages/signup_login_page"
import { PaymentPage } from "../pages/payment_page"
import { ContactUsPage } from "../pages/contactUs_page"

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const signupLoginPage = new SignupLoginPage()
const paymentPage = new PaymentPage()
const contactUsPage = new ContactUsPage()

// set of variables to create a new email each time the test case is triggered
var date = new Date()
var day = date.getDate()
var month = date.getMonth() + 1
var year = date.getFullYear()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = Math.random(100)
var fulldate = year+month+day+hours+minutes+seconds
var email = 'examtest'+fulldate+'@gmail.com'
var password = '123456'
var name = 'Pablo'

it.only('Main Test Case', function(){
    cy.visit('https://automationexercise.com/')
    homePage.clickFancyTop()
    productPage.enterQuantity()
    productPage.clickAddToCart()
    productPage.clickViewCart()
    cartPage.clickProceedToCheckout()
    cartPage.clickRegisterLogin()
    signupLoginPage.enterName(name)
    signupLoginPage.enterEmail(email)
    signupLoginPage.clickSignup(fulldate)
    signupLoginPage.clickGender()
    signupLoginPage.enterPassword(password)
    signupLoginPage.clickDay()
    signupLoginPage.clickMonth()
    signupLoginPage.clickYear()
    signupLoginPage.enterFirstName()
    signupLoginPage.enterLastName()
    signupLoginPage.enterAddress()
    signupLoginPage.enterCountry()
    signupLoginPage.enterState()
    signupLoginPage.enterCity()
    signupLoginPage.enterZipcode()
    signupLoginPage.enterMobileNumber()
    signupLoginPage.clickCreateAccount()
    signupLoginPage.clickContinue()
    homePage.clickCartButton()
    cartPage.clickProceedToCheckout()
    cartPage.enterComment()
    cartPage.clickPlaceOrder()
    paymentPage.enterCardName()
    paymentPage.enterCardNumber()
    paymentPage.enterCardCvc()
    paymentPage.enterCardExpMonth()
    paymentPage.enterCardExpYear()
    paymentPage.clickPayAndConfirm()
    signupLoginPage.clickContinue()
    homePage.clickLogoutButton()
    signupLoginPage.enterLoginEmail(email)
    signupLoginPage.enterLoginPassword(password)
    signupLoginPage.clickLoginButton()
    homePage.validateSuccessfulLogin()
    homePage.clickContactUsButton()
    contactUsPage.enterName()
    contactUsPage.enterEmail(email)
    contactUsPage.enterSubject()
    contactUsPage.enterMessage()
    contactUsPage.clickSubmit()
    contactUsPage.clickHome()
    homePage.clickLogoutButton()
})
