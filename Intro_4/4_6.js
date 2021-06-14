const readlineSync = require('readline-sync');
// Exo 4.6
let a = new Number(readlineSync.question('Choose a number : '));

function factorial(a){
    if(a == 0 || a == 1){
        return 1; // les factorielles de 0 et de 1 sont 1
    } else {
        return a * factorial(a-1);
    }
}
console.log("The factorial of " + a + " is " + factorial(a));

