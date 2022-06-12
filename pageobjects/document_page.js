const { ary } = require("lodash");
const { Key, By, until } = require("selenium-webdriver");
var BasePage = require("./base");

class DocumentPage extends BasePage {
  async getListText(css) {
    let arr = [];
    let a = await this.driver.findElements(By.css(css));
    for (let i = 0; i < a.length; i++) {
      let c = await a[i].getText();
      arr.push(c);
    }
    return arr;
  }
  async waitFindabc(locator) {
    return this.driver.findElements(async () => {
      await this.driver.wait(until.elementLocated(locator));
      return this.driver.findElements(locator);
    });
  }
  convertStringToNumber(data) {
    let c = data.map((e) => {
      return Number(e);
    });
    return c;
  }
  async clickButtonShowList() {}
}
module.exports = new DocumentPage();
