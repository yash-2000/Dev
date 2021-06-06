const fs=require("fs");
const puppeteer =require("puppeteer");
const fetch=require('node-fetch');
const cheerio=require("cheerio");
const request=require("request");

let namelist=[];
let pricelist=[];
let ratinglist=[];
let selectedlinklist=[];
let doc;
let browser;

let id="9205029055";
let pss="0987654321";
let product="macbook air";


async function login(){

 browser=await puppeteer.launch({headless:false,defaultViewport:null,args:["--start-maximized"]});
let page=await browser.pages();
let tab=page[0];
await tab.goto("https://www.amazon.in/");
await tab.waitForTimeout(2000);
let signin=await tab.$('#nav-tools #nav-link-accountList');
let signlink=await tab.evaluate(function(ele){return ele.getAttribute("href")},signin);
await tab.goto(signlink);
await tab.click('#ap_email');
await tab.type("#ap_email",id);
await tab.click('.a-button-input'); 
await tab.waitForSelector('#ap_password');
await tab.click('#ap_password');
await tab.type('#ap_password',pss);
await tab.click('#signInSubmit');
await tab.waitForTimeout(3000); 
await tab.click(".nav-search-field #twotabsearchtextbox");
await tab.type(".nav-search-field #twotabsearchtextbox",product);
await tab.click('#nav-search-submit-button');
await tab.waitForTimeout(3000);
let serialwiselist=await fetchphonelist(tab);
let allphones=await tab.$$('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 a');

for(let i=0;i<5;i++){
    let firstdiv=allphones[i];
    let link= await tab.evaluate(function(ele){return ele.getAttribute("href")},firstdiv);
    let linkseries="http://www.amazon.in/"+link;
    await compare(linkseries,i,serialwiselist); 
    await tab.waitForTimeout(1000);
    await nevigate(browser,linkseries);
}
await finalselection(tab);

};
login();

async function fetchphonelist(tab){

   let url=await tab.url();
   let d=await fetch(url);
   let res=await d.text();
   await fs.promises.writeFile("./load.html",res);
   let loaddata=await fs.promises.readFile("./load.html","utf-8");
    doc=cheerio.load(loaddata);
   let listsphone= doc(".s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.sg-col-12-of-16");
   await fs.promises.writeFile("./itemlist.html",listsphone+"");
   return listsphone;

}

async function compare(eachlink,i,serialwiselist){

   let onebyonelist= await doc(serialwiselist[i]);
   let text=await onebyonelist.find('.a-size-medium.a-color-base.a-text-normal');
   let t= await text.text();
   let p=await onebyonelist.find(".a-price-whole");
   let pricetext=await p.text();
   let rat=await onebyonelist.find('.a-icon-alt');
   let rattext=await rat.text();
   let actualrating=rattext.split(" ");
   ratinglist.push(actualrating[0]);
   pricelist.push(pricetext);
   selectedlinklist.push(eachlink);
   namelist.push(t);

}

async function nevigate(browser,link){

   let newtab =await browser.newPage();
   await newtab.goto(link);   
   await newtab.waitForTimeout(1000);
   await newtab.close();

}


async function finalselection(tab){

let min=pricelist[0];
let max=ratinglist[0];
let index1=0;
let index2=0;
for(let k=1;k<pricelist.length;k++){
   if(pricelist[k]<min){
      min=pricelist[k];
      index1=k;
   }
}
for(let l=1;l<ratinglist.length;l++){
   if(ratinglist[l]>max){
      max=ratinglist[l];
      index2=l;
   }
}
if(index1==index2){
   console.log("Buyyyyyyy : "+namelist[index1]);
   let nt=await browser.newPage();
   await nt.goto(selectedlinklist[index1]);
   await nt.waitForSelector('#buy-now-button');
   await nt.click('#buy-now-button');
}else{
   console.log("RATING IS NOT GOOD BUT AT A GOOD PRICE "+ namelist[index1]);
   let nt=await browser.newPage();
   await nt.goto(selectedlinklist[index1]);
   await nt.waitForSelector('#buy-now-button');
   await nt.click('#buy-now-button');
}

}