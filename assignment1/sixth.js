const prompt = require("prompt-sync")();

let userInput = prompt("please enter the number ")

let result = 0;

for (let i = 0; i < userInput.length; i++) {

    result = result + i;

}
//
console.log(result);

const prompt = require("prompt-sync")();

let userInput = prompt("please enter the number ")

let result = 0;

for (let i = 0; i < userInput.length; i++) {

    result = result + Number(userInput.charAt(i));

}

console.log(result);