const Homepage = require("../POM/Homepage");
const moment = require("moment");
const{expect} = require("chai");
const MyMomentFunctions = require("../Utils/MyMomentFunctions");

/**
 * Tc-1:
 * 
 * hotels.com
 * Verify past dates of the current month is not enabled
 */
const hpage = new Homepage();

 describe('August 22 Homework', () => {
    it('Verify past dates of current month not enabled', async () => {
        

        await browser.url('https://www.hotels.com/');
        await browser.pause(2000);

        await hpage.clickOnCalendarButton();
        await browser.pause(2000);

        const dateEnabled = await hpage.pastDatesOfCurrentMonthDisabled();
        expect(await dateEnabled, 'Dates enabled').to.be.false;
        
        

        
    });

/**
 * Tc-2:
 * 
 * Verify destination and check-in and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select tomorrow's date as check-in date (Aug-23)
 * 5. Select 5 days from check-in as check-out (Aug-28)
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date is tomorrow's date
 * 8. Verify check-out date in 5-days from check-in date
 * 
 */


     it.only('Verify destination is as user selected', async () => {
 
         // 1. Launch hotels.com
         await browser.url('https://www.hotels.com/');
 
         // 2. Type "man" in destination
         await hpage.enterDestination('man');
 
         // 3. Select "Manila" from auto-suggestion
         await hpage.selectDestinationFromAutoSuggestion('Manila');
         await browser.pause(2000);

 
         // 4. Select tomorrow's date as check-in date (Aug-23)
         await hpage.clickOnCalendarButton();
         await hpage.selectTomorrowAsCheckin();
         await browser.pause(2000);

         //5. Select 5 days from check-in as check-out (Aug-28)
         await hpage.selectNumberofDaysofStay(5);
         await browser.pause(2000);
         //6. Click Search button
         await hpage.clickSearchBtn();
         await browser.pause(2000);

         //7. Verify destination has Manila
         
         expect(await hpage.isManilaSelected(), 'Manila is not destination').to.be.true;

         //8. Verify check-in date is tomorrow's date
         //9. Verify check-out date in 5-days from check-in date
         expect(await hpage.verifyCheckOutDate5daysFromCheckIn(), 'Check out is not 5 days from check in').to.be.true;

 
         
     })
 });