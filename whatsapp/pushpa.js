const puppeteer=require("puppeteer");
const id="infoproject606";
const pass="Pro@ject123";
async function mobile(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        //slowMo : 200
      });
let alllinks=[];
let pages = await browser.pages();
let tab = pages[0];
await tab.goto("https://www.91mobiles.com/upcoming-mobiles-in-india");
await tab.waitForTimeout(2000);
 await tab.waitForSelector(".hover_blue_link.name.gaclick");
 let alltag=await tab.$$(".hover_blue_link.name.gaclick");

for(let i=0;i<alltag.length;i++)
{
    
    let allids=await alltag[i].evaluate(function(ele){return ele.getAttribute("href");},alltag[i]);
    await tab.waitForTimeout(2000);
    
    let id="https://www.91mobiles.com/upcoming-mobiles-in-india"+allids;
    alllinks.push(id);
    console.log(id);
}
// *******************************************
//let tab1 = pages[1];
await tab.goto("https://www.gmail.com");
await tab.type(".whsOnd.zHQkBf",id);
await tab.click(".VfPpkd-vQzf8d");
await tab.waitForTimeout(2000);
//await tab.waitForSelector("".whsOnd zHQkBf"")
await tab.type(".whsOnd.zHQkBf",pass);
await tab.click(".VfPpkd-vQzf8d");
await tab.waitForSelector(".T-I.T-I-KE.L3");
await tab.click(".T-I.T-I-KE.L3");
await tab.waitForSelector(".aoD.hl");
await tab.type(".aoD.hl","pushkardayal21@gmail.com");
await tab.waitForTimeout(2000);
await tab.type(".aoT","mobile Information");
let message="These are Mobile phone set that is available soon.Compare and buy the best product for youself.These phone links are:";
let message1="\n";
await tab.type(".Am.Al.editable.LW-avf.tS-tW",message);
await tab.type(".Am.Al.editable.LW-avf.tS-tW",message1);
console.log("mailing links");

for(let i=0;i<alllinks.length;i++)
{
    let message3=alllinks[i];
    await tab.type(".Am.Al.editable.LW-avf.tS-tW",message3);
    await tab.type(".Am.Al.editable.LW-avf.tS-tW",message1);

}
//await tab.click(".a1.aaA.aMZ");

await tab.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3");
}

mobile();