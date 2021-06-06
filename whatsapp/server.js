const puppeteer = require("puppeteer");

async function scrape(url){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(" [title='Coding']");
    const target = await page.$(" [title='Coding']");
    await target.click(" [title='Coding']");
    const inputbox = await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
    );
    for(let i = 0; i<10 ; i++){
        await inputbox.type("helliio daarling");
        await page.keyboard.press("Enter");

    }
}

scrape("https://web.whatsapp.com");
