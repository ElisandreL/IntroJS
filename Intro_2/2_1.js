const readlineSync = require("readline-sync")
// Exo 2.1
let age = new Number(readlineSync.question('Can you enter your age ? '))
if (age >= 18) {
    console.log('Congrats, you are an adult !')
} else {
    console.log("You're still a child :')")
}
// Exo 2.2
console.log("Okey, now, you'll give me three numbers")
let min = new Number(readlineSync.question('Give me the smaller one : '));
let cur = new Number(readlineSync.question("Can you give the middle one ? "));
let max = new Number(readlineSync.question('And last but not least, the max one : '))
if ((cur > min) && (cur < max)) {
    console.log('Congrats ! You did a great job with ' + cur)
} else if (min > max) {
    console.log('Are you dumb, sir ?')
}
