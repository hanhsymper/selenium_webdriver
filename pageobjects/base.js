var webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
require("chromedriver");

var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: 10000 });
class BasePage {
  constructor() {
    this.driver = driver;
  }

  go_to_url(theURL) {
    driver.get(theURL);
  }

  enterTextByCss(css, text) {
    driver.findElement(By.css(css)).sendKeys(text);
  }

  clickButton(css) {
    driver.findElement(By.css(css)).click();
  }
  clickById(id) {
    driver.findElement(By.id(id)).click();
  }
  clickCssSelector(css) {
    driver.findElement(By.cssSelector(css)).click();
  }
  waitFind(locator) {
    return driver.findElement(async () => {
      await driver.wait(until.elementLocated(locator));
      return driver.findElement(locator);
    });
  }
  sleep(seconds) {
    var e = new Date().getTime() + seconds * 1000;
    while (new Date().getTime() <= e) {}
  }
}

module.exports = BasePage;
