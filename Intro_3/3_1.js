const readlineSync = require('readline-sync');
// Exo 3.1

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [100, 101, 102];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arrOne.reduce(reducer));
console.log(arrTwo.reduce(reducer));
//recherches comp à faire
