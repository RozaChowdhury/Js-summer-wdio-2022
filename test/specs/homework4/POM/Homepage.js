
const MyMomentFunctions = require("../Utils/MyMomentFunctions");
const Commands = require("./Commands");

class Homepage {

    currentMonthDisabledDatesStarts = "//button[starts-with(@aria-label,'"
    currentMonthDisabledDatesEnds = "') and contains(@aria-label,'date disabled')]"
    //button[starts-with(@aria-label,'Sep') and contains(@aria-label,'date disabled')]
    nextDayLocatorStarts = "//button[@aria-label='"
    nextDayLocatoraEnds = "']"
    //button[@aria-label='Sep 15, 2022']

    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";

    calendarButtonLocator = '#date_form_field-btn';

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    searchButton = "//button[@data-stid='apply-date-picker']"

    destinationLocator = "//div[@id='destination_form_field-menu']//div/button"
    //"///button[contains(@data-stid,'form_field-menu')]";
    verifycheckinlocator = "//button[contains(text(),'"
    verifycheckoutlocator = "')]"



   commands = new Commands;
    // current month save save
    // join that sonst with the start and end
    // find all locators store in array
    //create loop to check each one is disable
    async pastDatesOfCurrentMonthDisabled() {
        const currentMonth = MyMomentFunctions.getCurrentMonth();
        const monthLocator = this.currentMonthDisabledDatesStarts + currentMonth + this.currentMonthDisabledDatesEnds;
        const disabledDates = await this.commands.findWebElements(monthLocator);
        
        for (const dateElement of disabledDates){
            const dateEnabled = await this.commands.isWebElementEnabled(dateElement);
            return dateEnabled;
            // break;
        }

    }

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
        await browser.pause(2000);
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
        await browser.pause(1000);
    }

    async selectCheckInDate(monthName, year, checkInDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }
    async selectTomorrowAsCheckin(){
        //   //button[@aria-label='Sep 15, 2022']
             //button[@aria-label='Sep 15, 2022']
        const month = MyMomentFunctions.getCurrentMonth();
        const date = MyMomentFunctions.getCurrentDate() + 1;
        const year = MyMomentFunctions.getCurrentYear();
        const dateToBeSelected = this.nextDayLocatorStarts + month + ' ' + date + ', '+ year + this.nextDayLocatoraEnds;
        await this.commands.clickWebElement(dateToBeSelected);

    }
    async selectNumberofDaysofStay(num) {
        const month = MyMomentFunctions.getCurrentMonth();
        const date = MyMomentFunctions.getCurrentDate() + 1 + num;
        const year = MyMomentFunctions.getCurrentYear();
        const dateToBeSelected = this.nextDayLocatorStarts + month + ' ' + date + ', '+ year + this.nextDayLocatoraEnds;
        await this.commands.clickWebElement(dateToBeSelected);
    }
    async clickSearchBtn(){
        await this.commands.clickWebElement(this.searchButton);
    }
    async isManilaSelected(){
        const element = await this.commands.getTextFromWebElement(this.destinationLocator);
        // const elementInLowerCase = await element.split(' ');
        if(element.includes('Manila')){
            return true;
        }
        else{
            return false;
        }

    }
    

    async verifyCheckOutDate5daysFromCheckIn(){
        //button[contains(text(),'Sep 28 - Sep 29')]
        const checkInDate =  MyMomentFunctions.getCurrentMonth() + ' ' + MyMomentFunctions.getCurrentDate();
        const checkOutDate = MyMomentFunctions.getCurrentMonth() + ' ' + MyMomentFunctions.addDays(5);
        const text = this.verifycheckinlocator + checkInDate + ' - ' + checkOutDate + this.verifycheckoutlocator;
        const element = this.commands.getTextFromWebElement(text);
        if(text.includes(checkInDate) && text.includes(checkOutDate)){
            return true;
        }
        else{
            return false;
        }
        // await this.commands.isWebElementDisplayed(element);
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }


}
module.exports = Homepage;