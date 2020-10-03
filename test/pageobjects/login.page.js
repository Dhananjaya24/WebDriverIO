const Page = require('./page');

// sub page containing specific selectors and methods for Login and Add to cart
class LoginPage extends Page {

    get signin () { return $('div[class="header_user_info"]') }
    get inputEmail () { return $('input[id="email"]') }
    get inputPassword () { return $('input[id="passwd"]') }
    get signinButton () { return $('button#SubmitLogin') }
    get usrName () { return $('//div[@class="header_user_info"]//span') }

    get womenLink () { return $('a[title="Women"]')}
    get itemLink () { return $('(//h5[@itemprop="name"]//a)[2]')}
    get addToCart () { return $('#add_to_cart')}
    get proceedCheckout () { return $('//a[@title="Proceed to checkout"]/span')}
    get proceedSummary () { return $('(//a[@title="Proceed to checkout"]//span)[2]')}
    //get addToCart () { return $('//p[@class="cart_navigation clearfix"]/a[1]')}
    get proceedAddress () { return $('button[name="processAddress"]')}
    get checkBox () { return $('input[type=checkbox]')}
    get proceedShipping () { return $('button[name="processCarrier"]')}
    get productNameinPayment () { return $('p[class="product-name"]')}

//Methods
     signinlink () {
     this.signin.click();
     }

    open () {
        return super.open();
    }

    login (useremail,userpassword) {

           this.inputEmail.setValue(useremail);
           this.inputPassword.setValue(userpassword);
           this.signinButton.click();

        }

        loggedInUserNameVerify () {
        const elem = $('//div[@class="header_user_info"]//span');
                expect(elem).toHaveText('Dhananjay g');
        }

       /* addtocheck () {
           const addtocartcheck = $('#add_to_cart')
           expect(addtocartcheck).toBeDisplayed()
          } */

        addtocart () {
        this.womenLink.click();
        this.itemLink.click();
        this.addToCart.click();
        }

        proceedChkout () {
            const eleProceedCheckout = $('//a[@title="Proceed to checkout"]');
            //eleProceedCheckout.waitForExist(5000);
            eleProceedCheckout.click();
        }

        proceedCheckoutItems () {
       //this.proceedCheckout().click();
        this.proceedSummary.click();
        this.proceedAddress.click();
        this.checkBox.click();
        this.proceedShipping.click();
        }

        productNameVerify () {
        const ele=$('p[class="product-name"]');
        expect(ele).toHaveText('Blouse');
        }
}

module.exports = new LoginPage();