const readlineSync = require("readline-sync");
//let userName = readlineSync.question('Can you give me your name please ?');
//console.log("Hello " + userName);
/*let age = 25; // I'm 25 --> LET allows you to create a new var
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
/*types of var : 
* Numbers : let age = 25;
* String : let phrase = "Coding is fun!";
* Booleans : let isItTrue = true;
let isItFalse = false;
Numbers : */

/*let age = 23;
let sisterAge = age + 11;
age += 12; // age = age + 11
console.log(age);*/
/*let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have ?'));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have ?'));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");*/

//It's time to play ! 
//Exercice 1.1

let name = new String(readlineSync.question('Can you give your name ?'));
let firstName = new String(readlineSync.question('Can you give your first name ?'));
console.log('Hello ' + firstName + ' ' + name)
let city = new String(readlineSync.question('Can you give your city ?'));
console.log('Your name is ' + name + ' ' + firstName + ' and you live in ' + city + '.');
