var {defineSupportCode} = require('cucumber');

defineSupportCode(function(context) {

    context.setDefaultTimeout(200 * 1000)

    var setWorldConstructor = context.setWorldConstructor;
    var Given = context.Given
    var When = context.When
    var Then = context.Then


    require('chromedriver')
    var expect=require('chai').expect

    var driver = require('selenium-webdriver');
    var browser = new driver.Builder()
        .forBrowser('chrome')
        .build();
    var by = driver.By;

    Given(/^I am on Codoid Home page$/, function () {
        return browser.get('http://codoid.com');
    });

    When(/^I click ([^"]*) link$/, function (text) {
        browser.wait(driver.until.elementLocated(by.linkText('CONTACT US')), 10000).click();
        return browser.findElement({linkText: text}).click();
    });

    Then(/^I should see "([^"]*)"$/, function (arg1) {
        var condition = driver.until.elementLocated({xpath: "//h2[contains(text(),'" + arg1 + "')]"});
        browser.wait(condition, 5000);
        return browser.quit();
    });

})