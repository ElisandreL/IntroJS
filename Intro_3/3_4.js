const readlineSync = require('readline-sync');
//Exo 3.4
let arrOne = [36, 12, 24, 42, 60, 6, 59];
const max = Math.max.apply(null, arrOne);
console.log(max);
const min = Math.min.apply(null, arrOne);
console.log(min);