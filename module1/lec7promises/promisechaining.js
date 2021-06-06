// Promises Chaining => To avoid promise hell !

// Initial State is Pending 
// Either the Pending Promise can be resolved or rejected 
// if Pending Promise is Resolved => success callback is invoked
// if Pending Promise is Rejected => failure callback is invoked

// scb can be attached to pending promise using then function
// fcb can be attached to pending promises using catch function

// then and catch can only be called on pending promises

// then() and catch() functions are async functions !
// then and catch also returns a pending promise also known as thenKaPromise





// const fs = require("fs");

// let f1kadata = fs.promises.readFile("./f1.txt");


// let a =f1kadata.then(function(data){
//    console.log(data+"");
//     console.log(a);
//     //return 5;
// })
// a.then(function(data){
//     console.log(a);
//     console.log("i ran after first scb");
// })

const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.txt");

f1kapromise.then(function(f1data){
    console.log(f1data+"");
    let f2kapromise = fs.promises.readFile("./f2.txt");
    return f2kapromise;
})
.then(function(f2data){
    console.log(f2data+"");
    let f3kapromise = fs.promises.readFile("./f3.txt");
    return f3kapromise;
})
.then(function(f3data){
    console.log(f3data+"");
})

