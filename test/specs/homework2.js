// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */
 describe('Homework two', () => {
    it('Print timeline data', async () => {

        await browser.url('http://www.darksky.net')
        await browser.pause(3000);

        const hourClass = await $$("//div[@id='timeline']//div[@class='timeline']//div[@class='hours']//span[not(contains(@class,'hour'))]");
        const array = [];

        for (const hour of hourClass){
            array.push(await hour.getText());
        }

        console.log(array);


        
    });
/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 * 
 */

    it.only('Verify destination and check-in/ and check-out dates are as user selected', async () => {
        
        // Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(4000);
        
        // Type "man" in destination
        await $("//button[@aria-label='Going to']").click();
        await browser.pause(4000);
        
        await $('#destination_form_field').setValue('Man');
        await browser.pause(4000);
        
        // Select "Manila"
        const selectCity = await $$("//div[@class='truncate']//strong");
        
        for (const cityText of selectCity) {
            const citySuggestion = await cityText.getText();
            if (citySuggestion.toLowerCase().localeCompare('Manila'.toLowerCase()) === 0) {
                await cityText.click();
                break;
            }
        }
        await browser.pause(4000);

        await $('#date_form_field-btn').click();
        await browser.pause(4000);

        await $('//button[@data-stid="date-picker-paging"]').click();
        await browser.pause(4000);
        
        // Select Aug 20 to Sep-5 as check-in and check-out respectively
        const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allAugDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("20") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(4000);
        
        const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allSepDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("5") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(4000);
        
        // Click Search button
        await $('//button[@data-stid="apply-date-picker"]').click();
        await browser.pause(4000);
        
        await $('//button[@id="submit_button"]').click();
        await browser.pause(4000);

        // Verify destination has Manila
        const destination = await $("//div[@data-stid='hotels-destination']//div//button[@type='button']").getText();
        console.log(`Destination -> ${destination}`);
        
        // Verify check-in date in Aug-20
        const checkInDate = await $('button[data-name=startDate]').getText();
        console.log(`Check in date -> ${checkInDate}`);

        // Verify check-out date in Sep-5
        const checkOutDate = await $('button[data-name=endDate').getText();
        console.log(`Check out date -> ${checkOutDate}`);

    });   
});
