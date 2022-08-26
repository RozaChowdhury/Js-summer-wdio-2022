const Commands = require("../Commands");

class SignUppage{

    commands = new Commands();

    keepMeSignedIn = 'input[type=checkbox]';
    loginBtn = '#loginbutton';
    findAccLink = '=Find your account and log in.';
    // keepMeSignedIn = 'label=Keep me signed in';
    checkBox = 'input[type=checkbox]';
    continueBtn = '#loginbutton';
    newkeepMeSignedIn = 'label=Keep me signed in';

    async keepMeSignedInIsSelected(){
        const selectedKeepMeSignedIn = await this.commands.webElementIsSelected(this.keepMeSignedIn);
        expect(await selectedKeepMeSignedIn, 'Keep signed in not selected').to.be.true;
    }
     async clickLoginBtn(){
        await this.commands.scroll(this.loginBtn);
        await this.commands.clickWebElement(this.loginBtn);
     }

     async verifyFindYourAccIsDisplayed(){
        const findYourAccDisplayed = await this.commands.isWebElementDisplayed(this.findAccLink);
        expect(await findYourAccDisplayed, 'Find Acc Link not displayed').to.be.true;
     }
     async verifyContinueBtnisEnabled(){
        const isEnabled = await this.commands.isWebElemenetEnabled(this.continueBtn);
        expect(await isEnabled, 'Continue not enabled').to.be.true;
     }
     async clickKeepMeSignedIn(){
        await this.commands.clickWebElement(this.newkeepMeSignedIn);
        await this.commands.webElementIsSelected(this.checkBox);
     }
     async keepMeSignedInIsNotSelected(){
        const notSelectedKeepMeSignedIn = await this.commands.webElementIsSelected(this.keepMeSignedIn);
        expect(await notSelectedKeepMeSignedIn, 'Keep signed in selected').to.be.false;

     }


}
module.exports = SignUppage;