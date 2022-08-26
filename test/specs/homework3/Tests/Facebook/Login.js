const LoginPage = require("../../POM/Facebook/Loginpage");
const SignUppage = require("../../POM/Facebook/SignUppage");

describe('Homework Three', () => {
    const lipage = new LoginPage();
    const supage = new SignUppage();
    it('Verify user gets error message when submit empty login form', async () => {
        /**
         * Tc-3:
         * https://www.facebook.com
         * 
         * Verify user gets error message when submit empty login form
         * expected error msg -> The email address or mobile number you entered isn't connected to an account.
         * 
         */
        await browser.url('https://www.facebook.com');
        await browser.pause(3000);

        await lipage.clickLoginBtn();
        
        await browser.pause(3000);

        await lipage.errorMsgDisplayed();

    });
    it.only('Verify empty messenger login flow', async () => {
        /**
         * Tc-4:
         * https://www.facebook.com
         * 
         * Verify empty messenger login flow
         * 1. Click Messenger
         * 2. Verify 'Keep me signed in' is not selected
         * 3. Click 'Log In' button
         * 4. Verify link -> "Find your account and log in" is displayed
         * 5. Verify 'Continue' button is enabled
         * 6. Verify 'Keep me signed in' is not selected
         * 7. Click 'Keep me signed in'
         * 8. Verify 'Keep me signed in' is selected
         * 
         */
         await browser.url('https://www.facebook.com');
         await browser.pause(3000);

         lipage.clickMessengerLink();
         await browser.pause(5000);
         supage.keepMeSignedInIsNotSelected();
         supage.clickLoginBtn();
         await browser.pause(3000);
         supage.verifyFindYourAccIsDisplayed();
         supage.verifyContinueBtnisEnabled();
         supage.keepMeSignedInIsNotSelected();
         supage.clickKeepMeSignedIn();
         supage.keepMeSignedInIsSelected();


    });


    
});
