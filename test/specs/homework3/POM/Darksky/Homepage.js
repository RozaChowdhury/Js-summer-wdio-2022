const Commands = require("../Commands");
const { expect } = require('chai');


class Homepage{

    commands = new Commands();

    // Locators

    feelslikeTemp = 'span[class=feels-like-text]';
    highTemp = 'span[class=high-temp-text]';
    lowTemp = 'span[class=low-temp-text]';

    searchBox = 'input[type=text]';
    searchBtn = 'a[class=searchButton]';


    // Functions
    
    async compareTemp(){
        const feelslikeTemp1 = await this.commands.getTextFromWebElement(this.feelslikeTemp);
        const highTemp1 = await this.commands.getTextFromWebElement(this.highTemp);
        const lowTemp1 = await this.commands.getTextFromWebElement(this.lowTemp);
        expect((feelslikeTemp1 >= lowTemp1 && feelslikeTemp1 <= highTemp1), 'FeelsLikeTemp is not between high and low temp').to.be.true;
        // expect((this.commands.getInteger(feelslikeTemp1) >= this.commands.getInteger(lowTemp1) && this.commands.getInteger(feelslikeTemp1) <= this.commands.getInteger(highTemp1)), 'FeelsLikeTemp is not between high and low temp').to.be.true;
        
    }

    async istempDisplayed(){
        await this.commands.setValueInWebElement(this.searchBox, '11111');
        await browser.pause(3000);

        await this.commands.clickWebElement(this.searchBtn);
        await browser.pause(3000);
        
        const isDisplayed = await this.commands.isWebElementDisplayed(this.feelslikeTemp);

        expect(await isDisplayed, 'Not Displayed').to.be.true;
    }


}

module.exports = Homepage;