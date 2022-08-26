const Commands = require('../Commands');
const { expect } = require('chai');

class LoginPage{

    commands = new Commands();

    //locators

    loginBtn = 'button[name=login]';
    errMsg = 'div*=email or mobile number';
    messengerLink = '=Messenger';

    //functions

    async clickLoginBtn(){
        await this.commands.clickWebElement(this.loginBtn);
    }

    async errorMsgDisplayed(){
        const errMsgIsDisplayed = await this.commands.isWebElementDisplayed(this.errMsg);
        expect(errMsgIsDisplayed, 'Error message not displayed').to.be.true;
    }

    async clickMessengerLink(){
        await this.commands.clickWebElement(this.messengerLink);
    }
    

} 

module.exports = LoginPage;