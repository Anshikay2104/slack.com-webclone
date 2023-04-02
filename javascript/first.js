const prompt = require("prompt-sync")();

let a=prompt("enter the first number :");
let b=prompt("enter the second number :");
let c=prompt("enter the third number :");

let res=(a>b)?a:b;
let result=(res>c)?res:c;

console.log("the largest number is",result);