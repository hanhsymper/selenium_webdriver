const { Key } = require("selenium-webdriver");
require("chromedriver");

var BasePage = require("./base");

class Login extends BasePage {
  enter_login(email, password) {
    //This will enter text into the search field
    this.enterTextByCss("#input-20", email);
    //this will send the enter key to the element
    this.enterTextByCss("#password", password);
    this.clickButton("button[type=button]");
  }
}
module.exports = new Login();
