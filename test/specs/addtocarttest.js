const LoginPage = require('../pageobjects/login.page');

describe('My Store Home page', () => {
    it('Login to Mystore and add item to cart and proceed to checkout', () => {
        LoginPage.open();
        expect(browser).toHaveTitle('My Store');
        LoginPage.signinlink();
        LoginPage.login("equanimous.dhanu@gmail.com","Test@123");
        LoginPage.loggedInUserNameVerify();
        LoginPage.addtocart();
        browser.pause(5000);
        LoginPage.proceedChkout();
        LoginPage.proceedCheckoutItems();
        LoginPage.productNameVerify();

    });
});


