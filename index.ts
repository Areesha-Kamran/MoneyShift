#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

import chalkAnimation from "chalk-animation";

async function welcome () {
    let title = chalkAnimation.rainbow("\t\t\t\tWelcome to MoneyShift!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()


const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

let Usranswer = await inquirer.prompt(
    [
        {
            name:"From",
            message:(chalk.blue("Enter from currency")),
            type:"list",
            choices:['USD','EUR','GBP','INR','PKR']
        },
        {
            name:"TO",
            message:(chalk.blue("Enter to currency")),
            type:"list",
            choices:['USD','EUR','GBP','INR','PKR']
        },
        {
            name:"Amount",
            message:(chalk.cyan("Enter your amount")),
            type:"number"
         
        }
    ]
)

let fromAmount = currency[Usranswer.From]
let toAmount = currency[Usranswer.TO]
let Amount = Usranswer.Amount
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.green(convertedAmount))


