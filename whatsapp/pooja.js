const puppeteer = require('puppeteer');

(async function (){
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
  console.log("Logged in!!");
  await tab.waitForTimeout(1000);

 //afterlogin
 
  await tab.waitForTimeout(2000);
  await tab.click('button[type = "Not Now"]');
  await tab.waitForTimeout(2000);

//
})();