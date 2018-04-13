// require('chromedriver');
// const { By } = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
//   .forBrowser('chrome')
//   .build();

//   driver.get("https://google.com");
//   driver
//     .findElement(By.id('lst-ib'))
//     .sendKeys("selenium");
//   driver.sendKeys()


require('chromedriver');

const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

let driver = new webdriver.Builder()
   .forBrowser('chrome')
   .build();

driver.get('http://www.google.com');
var searchBar = driver.findElement(webdriver.By.id('lst-ib'));

searchBar.sendKeys('selenium' + Key.ENTER).then(function() {
   driver.getCurrentUrl().then(function(url) {
       console.log(url);
   })
});
    