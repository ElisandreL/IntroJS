const readlineSync = require('readline-sync');
//Exo 3.2
let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [100, 101, 102];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalOne = (arrOne.reduce(reducer)) / arrOne.length;
let totalTwo = (arrTwo.reduce(reducer)) / arrTwo.length;
console.log('The average of the fist array is ' + totalOne);
console.log('The average of the second array is ' + totalTwo);