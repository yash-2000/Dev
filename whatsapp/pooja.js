const puppeteer = require('puppeteer');
const { browser } = require('./netin');
const fs = require('fs');
async function Login(){
let browser = await puppeteer.launch({
      headless : false,
      defaultViewport: null,
      args : ["--start-maximized"],
  });
  let pages = await browser.pages();
  let tab = pages[0];  
  
  //go to the url
  await tab.goto("https://www.instagram.com/accounts/login/");
  
  await tab.waitForTimeout(1000);

//Login page
  await tab.waitForSelector('input[name="username"]');
  await tab.type('input[name = "username"]', 'poojas9449@gmail.com', {delay : 50});
  await tab.type('input[name ="password"]', '9490@Ps', {delay : 50});
  await tab.click('button[type="submit"]'); 
  await tab.waitForTimeout(1000);
  console.log("Logged in!!");
  await tab.waitForTimeout(1000);

 //afterlogin(save info or not)
 await tab.waitForSelector("#react-root > section > main > div > div > div > section > div > button");
 await tab.click("#react-root > section > main > div > div > div > section > div > button");
 console.log("Info Save !!");
 await tab.waitForTimeout(3000);

  //notification turn off/on
  await tab.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR");
  await tab.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR");
  console.log("Turn on Notification !!");
  await tab.waitForTimeout(5000);

  //click on massege icon
  await tab.waitForSelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(2) > a > svg");
  await tab.click("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(2) > a > svg");
  console.log("Tab for massege is opened!!");
  await tab.waitForTimeout(5000);
  await tab.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR");
  await tab.waitForTimeout(3000);

};
Login();
async function massege(){
  const page = await browser.newPage();
  await page.waitForSeletor("#f1e2f82cf0ea3 > div > div > div > div");
  const target = await page.$("#f1e2f82cf0ea3 > div > div > div > div");
  await target.click();
  const inputbox = await page.$("#react-root > section > div > div.Igw0E.IwRSH.eGOV_.4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_.4EzTm > div > div > div.Igw0E.IwRSH.eGOV.vwCYk.ItkAi > textarea");
  for(let i = 0; i<100 ; i++){
      await inputbox.type("hello!");
      await page.keyboard.press("Enter");
  }
}
massege();