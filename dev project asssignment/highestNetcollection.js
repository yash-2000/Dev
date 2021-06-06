let collectionlink = "https://www.sacnilk.com/entertainmenttopbar/Box_Office_Collection?hl=en";

const request = require("request");

const fs = require("fs");

const cheerio = require("cheerio");

// request(collectionlink , cb);

// function cb(error , response , data){
//     //console.log(data);

//     fs.writeFileSync("./collection.html" , data);
// }

let htmlkadata = fs.readFileSync("./collection.html" , "utf8");

let mydocument = cheerio.load(htmlkadata);

let collectioninfo = mydocument(".table1");

let table = mydocument(collectioninfo[3]);

//fs.writeFileSync("./table.html" , table+"" );

let highestcollectionmoviename;

let highestcollection;


let tablerows = table.find("tbody tr");

// fs.writeFileSync("./tablerows.html", tablerows+"");

for(let j=0; j<tablerows.length ; j++){
    
    let alltds = mydocument(tablerows[j]).find("td");
    
    if(j==1){
        highestcollectionmoviename = mydocument(alltds[1]).find("a").text();

        highestcollection = mydocument(alltds[3]).text();
    }

    
}


console.log("indian net highset collection movie name is = " + highestcollectionmoviename);

console.log("indian net colllect is = " + highestcollection);


