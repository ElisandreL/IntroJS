const readlineSync = require('readline-sync');
// Exo 2.7
let n = new Number(readlineSync.question("What's your fav number ? Smaller it is, better experience you will have : "));
let total = 0;

for (let i = 0; i < n; i++ ) {
    Num = new Number(readlineSync.question('Choose a number : '));
    total = (total + Num);
} 
console.log(total);