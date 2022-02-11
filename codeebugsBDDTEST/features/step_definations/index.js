const {expect} = require("chai");
const {Given, When, Then, Before, After} = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");
require('chromedriver');

Given('Test registration functionality', {timeout: 30000}, async function (){

    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().forBrowser('chrome').build();


    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("signUp")).click();
    await driver.findElement(By.id("full_name")).sendKeys("testBDD");
    await driver.findElement(By.id("email")).sendKeys("testBDD@gmail.com");
    await driver.findElement(By.id("age")).sendKeys("10");
    await driver.findElement(By.id("password")).sendKeys("12345678");
    await driver.findElement(By.id("confirm_password")).sendKeys("12345678");
    await driver.sleep(delay);
    await driver.findElement(By.id("btnSignup")).click()
    await driver.wait(until.elementLocated(By.id("loginemail")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("loginemail"))));
    //await driver.quit()
})

Given ('Test login functionality', {timeout:40000}, async function(){
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    await driver.get("http://localhost:3000/login");

    await driver.findElement(By.id("loginemail")).sendKeys("testBDD@gmail.com");
    await driver.findElement(By.id("loginpassword")).sendKeys("12345678");
    await driver.findElement(By.id("login_signin")).click()
    
    await driver.wait(until.elementLocated(By.id("logo")), 30000);
    expect(await driver.wait(until.elementLocated(By.id("logo"))));
    await driver.quit()

})