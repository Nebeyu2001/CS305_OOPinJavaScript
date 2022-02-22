"use strict"



let commission;
const prompt = require("prompt-sync")();

let checkSalary = prompt(" do you have salary? : ");

let isSalesManSalaried = (checkSalary == "yes");

let sales = prompt("please enter your sales: ");

if (isSalesManSalaried) {

    if (sales < 300) {

        console.log("no commission")

    }

    else if (sales >= 300 && sales <= 500) {

        commission = sales * 0.01;

        console.log(" The commision is " + commission)

    }

    else {

        commission = sales * 0.02;

        console.log(" The commision is " + commission)

    }

}
else if (!isSalesManSalaried) {

    if (sales >= 300 && sales <= 500) {

        commission = sales * 0.02;

    }

    else if (sales > 500) {

        commission = sales * 0.03;

    }

    console.log(" The commision is " + commission)

}