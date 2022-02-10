const {expect} = require("chai");
const {Given, When, Then, Before, After} = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given('Test registration functionality', {timeout: 30000}, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("signUp")).click();
    await driver.findElement(By.id("full_name")).sendKeys("testBDD");
    await driver.findElement(By.id("email")).sendKeys("testBDD@gmail.com");
    await driver.findElement(By.id("age")).sendKeys("10");
    await driver.findElement(By.id("password")).sendKeys("12345678");
    await driver.findElement(By.id("confirm_password")).sendKeys("12345678");
    await driver.sleep(delay);
    await driver.wait(until.elementLocated(By.id("loginemail")), 30000);
    expect(await driver.wait(until.elementLocated(by.id("loginemail"))));
    await driver.quit()

})