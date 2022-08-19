// Verify facebook title contains LoG In (ignore cases)
//     Steps:
//     1. Launch facebook.com
//     2. Get the page title
//     3. Verify pageTitle contains “LoG In” (ignoring cases)

const {expect} = require("chai");

describe('Verify title', () => {
    it('Verify title contains login ignore cases', async () => {

        await browser.url('https://www.facebook.com/');

        await browser.pause(3000);
        const pageTitle = await browser.getTitle();
        const pageTitleLowerCase = pageTitle.toLowerCase();
        const getTitleLogIn = pageTitleLowerCase.substring(pageTitleLowerCase.indexOf('l'),1+pageTitleLowerCase.indexOf('n'));

        expect(getTitleLogIn, 'Facebook title is not as expected').to.be.equal('log in'); 


        
    });
    
});