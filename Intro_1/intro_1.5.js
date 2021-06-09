const readlineSync = require("readline-sync");
// Exercice 1.5
let divi = new Number(readlineSync.question('Can you divide 5 with 2 ?'));
let secDiv = new Number(readlineSync.question('Can you divide 7 with 2 ?'));
console.log('The integer answer of the first one is ' + Math.trunc(divi) + ' and the whole result of the second is ' + secDiv);
let totalMut = divi * secDiv;
console.log('Multiply them and you will obtain ' + totalMut);
let six = new Number(readlineSync.question('Give me a number : '));
let sev = new Number(readlineSync.question('Give me an other one with 4 decimal : '));
let totalDiv = six / parseFloat(sev).toFixed(2);
console.log('The result of the division of ' + six + ' with the decimal of ' + sev + '(' + parseFloat(sev).toFixed(1) + ') is ' + totalDiv);
let shoe = new Number(readlineSync.question('Then, can I ask your shoe size ? '));
let birth = new Number(readlineSync.question('And your birth year ? '));

let firstCalc = shoe * 2;
let secCalc = firstCalc + 5;
let thirdCalc = secCalc * 50;
let fourCalc = thirdCalc - birth;
let fifthCalc = fourCalc + 1766;

for (var i = 0; i < readlineSync.questionNewPassword.length; i++) {
    Response.push(readlineSync.question(questions[i]));
    console.log("Il vous reste " + (numQuest(-i-1)) + " question à répondre");
}

console.log('Multiply your shoe size by 2 : ' + firstCalc);
console.log('Then add 5 : ' + secCalc);
console.log('Then you mutiply by 50 : ' + thirdCalc);
console.log('Then you substract your year ' + fourCalc);
console.log('And last but not least, add 1766 : ' + fifthCalc);