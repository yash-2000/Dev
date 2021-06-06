let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

const fs = require("fs");

for(let i = 0; i<files.length; i++){
    let filekapromise = fs.promises.readFile(files[i]);
    filekapromise.then(function(data){
         console.log(data +"");
    });
}