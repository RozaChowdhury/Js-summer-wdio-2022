// const { expect } = require('chai');
const { hasFile } = require('@wdio/cli/build/utils');
const Homepage = require('../../POM/Darksky/Homepage');



describe('Homework three', () => {
    const hpage = new Homepage();
    /**
     * Tc-1:
     * https://www.darsky.net
     * Verify feelsLikeTempValue is between lowTempValue and highTempValue
     */
    it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
        // const hpage = new Homepage();


        await browser.url('https://darksky.net');
        await browser.pause(3000);
        await hpage.compareTemp();


    });
    /**
     * Tc-2:
     * https://www.darsky.net
     * Verify user can get temperature based on zipcode
     * 
     */
    it('Verify user can get temperature based on zipcode', async() => {
        await browser.url('https://darksky.net');
        await browser.pause(3000);

        await hpage.istempDisplayed();
        
    });



});

