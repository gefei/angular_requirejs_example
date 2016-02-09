/**
 * @author gefei
 */

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['main-test.js'],
    capabilities: {
        //'browserName': 'chrome'
        'browserName': 'firefox'
    },
    /*
    onPrepare: function() {
        browser.manage().window().setSize(1600, 1000);
    }
    */
}