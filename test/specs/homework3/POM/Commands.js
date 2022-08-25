class Commands{

    async findWebElement(locator) {
        return await $(locator);
    }
    
    async getTextFromWebElement(locator) {
        const element = await this.findWebElement(locator);
        return await element.getText();
    }

    async getInteger(locator){
        const element = await this.findWebElement(locator);
        // await element.substring(0,2);
        await parseInt(element);
    }

    async setValueInWebElement(locator, value){
        const element = await this.findWebElement(locator);
        await element.setValue(value);
    }

    async clickWebElement(locator){
        const element = await this.findWebElement(locator);
        await element.click();
    }

    async isWebElementDisplayed(locator){
        const element = await this.findWebElement(locator);
        return element.isDisplayed();
    }

    async webElementIsSelected(locator){
        const element = await this.findWebElement(locator);
        return element.isSelected();
    }

    async scroll(locator){
        await locator.scrollIntoView();
    }

    async isWebElemenetEnabled(locator){
        const element = await this.findWebElement(locator);
        await element.isEnabled();
    }



}
module.exports = Commands;