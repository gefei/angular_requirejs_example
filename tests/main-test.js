/**
 * @author gefei
 */

describe('Sample application', function() {
    var EC = protractor.ExpectedConditions;
    it('should succeed', function() {
        browser.get('http://localhost:63342/js_testing_example/app/index.html#/');
        var btn_de = element(by.buttonText('EN'));
        btn_de.click();

        /*
        var btn_show_dialog = element(by.partialButtonText('Show'));
        btn_show_dialog.click();

        var label_title = element(by.binding('title'));
        expect(label_title.isDisplayed()).toBe(true);

        var btn_close = element(by.buttonText('Close'));
        btn_close.click();

        btn_show_dialog.click();
        */
    });
});