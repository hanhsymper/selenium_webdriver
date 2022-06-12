const DocumentPage = require("../pageobjects/document_page");
const Login = require("../pageobjects/login_page");
const { By, until } = require("selenium-webdriver");
const lodash = require("lodash");

require("chromedriver");
const { expect } = require("chai");
const { driver } = require("../pageobjects/login_page");
const { waitFind } = require("../pageobjects/document_page");
describe("This is the describe block", function () {
  before(async () => {
    var baseurl = "https://inter-apps.symper.vn/#/login";
    Login.go_to_url(baseurl);
    Login.enter_login("hanhdth@symper.vn", "Symper@123BA");
    await DocumentPage.waitFind(
      By.css(
        ".v-icon.notranslate.collapse.icon-group.v-icon--link.mdi.mdi-file-document-edit-outline.theme--light"
      )
    ).click();
    await DocumentPage.waitFind(
      By.css(".v-list-item__title.fm.fs-13:first-child")
    ).click();
  });
  // it("test sort showlist", async function () {
  //   let a = await DocumentPage.getListText(
  //     ".ag-body-viewport.ag-layout-normal.ag-row-no-animation [aria-colindex='2'][col-id='id']"
  //   );
  //   a = DocumentPage.convertStringToNumber(a);
  //   a = lodash.orderBy(a, "DESC");

  //   await DocumentPage.clickButton(
  //     "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
  //   );
  //   await DocumentPage.clickButton(
  //     ".pb-1.dropdown-item.grey-hover:first-child"
  //   );
  //   let c = await DocumentPage.getListText(
  //     ".ag-body-viewport.ag-layout-normal.ag-row-no-animation [aria-colindex='2'][col-id='id']"
  //   );
  //   c = DocumentPage.convertStringToNumber(c);
  //   expect(c).to.deep.equal(a);
  // });
  it("test filter showlist", async function () {
    let a = await DocumentPage.getListText(
      ".ag-body-viewport.ag-layout-normal.ag-row-no-animation [aria-colindex='2'][col-id='id']"
    );
    // let d = await DocumentPage.waitFindabc(
    //   By.css(
    //     ".ag-body-viewport.ag-layout-normal.ag-row-no-animation [aria-colindex='2'][col-id='id']"
    //   )
    // );
    // d.map(async (e) => {
    //   console.log(await e.getText());
    // });

    // console.log(a);
    await DocumentPage.clickButton(
      "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
    );
    await DocumentPage.clickButton(
      ".w-100.v-btn.v-btn--depressed.theme--light.v-size--small"
    );

    // await driver.sleep(1000);

    // const button1 = driver.wait(
    //   until.elementLocated(
    //     By.css(
    //       ".v-list.symper-list-condition-type.v-sheet.theme--light.v-list--dense .v-list-item--link.v-list-item.v-list-item--link.theme--light:nth-child(4)"
    //     )
    //   ),
    //   10000
    // );
    // button1.click();
    const button = await driver
      .wait(
        until.elementLocated(
          By.css(
            ".v-list.symper-list-condition-type.v-sheet.theme--light.v-list--dense .v-list-item--link.v-list-item.v-list-item--link.theme--light:nth-child(4)"
          )
        ),
        20000
      )
      .then((element) => {
        return driver.wait(until.elementIsVisible(element), 20000);
      });
    await button.click();
    await DocumentPage.enterTextByCss(
      ".symper-table-filter-container.elevation-8 .v-input.sym-small-size.mt-2.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined .v-text-field__slot input",
      "3776"
    );

    await DocumentPage.clickButton(
      ".float-right.v-btn.v-btn--depressed.theme--light.v-size--small.primary"
    );
    const element = driver
      .wait(
        until.elementLocated(
          By.css(
            ".ag-body-viewport.ag-layout-normal.ag-row-no-animation [aria-colindex='2'][col-id='id']"
          )
        ),
        20000
      )
      .then((el) => {
        return el.getText();
      });
    let c = await element;
    console.log(c);

    expect(a).to.deep.include(c);
  });
});
