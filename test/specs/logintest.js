const LoginPage = require('../pageobjects/login.page');

describe('Verifying Login', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        expect(browser).toHaveTitle('My Store');
        LoginPage.signinlink();
        LoginPage.login("equanimous.dhanu@gmail.com","Test@123");
        LoginPage.loggedInUserNameVerify();

    });
});


