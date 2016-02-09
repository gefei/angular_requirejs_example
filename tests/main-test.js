/**
 * @author gefei
 */


describe('Sample application', function() {
    var EC = protractor.ExpectedConditions;
    it('should succeed', function() {
        browser.get('http://localhost:63342/js_testing_example/app/index.html#/');
        var btn_de = element(by.buttonText('EN'));
        btn_de.click();

        var btn_show_dialog = element(by.partialButtonText('Show'));
        btn_show_dialog.click();

        var label_title = element(by.binding('title'));
        expect(label_title.isDisplayed()).toBe(true);

        var btn_close = element(by.buttonText('Close'));
        btn_close.click();

        /*
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.elementToBeClickable(btn_show_dialog);
        browser.wait(isClickable, 5000);
        */

        var btn_2 = element(by.buttonText('2'));
        //btn_2.click();
        browser.actions().mouseMove(btn_2).click();
        browser.actions().mouseMove(btn_show_dialog).click();
        expect(label_title.isDisplayed()).toBe(true);

        btn_close.click();
        expect(btn_2.isDisplayed()).toBe(true);

    });
});
