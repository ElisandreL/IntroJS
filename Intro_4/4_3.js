const readlineSync = require('readline-sync');
// Exo 4.3
/*let arr = [];
let n = new Number(readlineSync.question('Choose a number : '));
function multiRand() {
    while (arr.length < n) {
    rand10 = Math.round(Math.random() * 10);
    if(arr.indexOf(rand10)) arr.push(rand10);
    }
}
console.log(arr);*/

/*let n = new Number(readlineSync.question('Give me a number : '));
let arr = new Array(n);
var j = 0;
while (j < arr.length) {
    let rand10 = Math.round(Math.random() * 10);
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == rand10) {
            found = true;
            break
        }
    } if(!found) {
        arr[j] = rand10;
        console.log(arr.slice());
        j++;
    }
}*/

function rand10() {
    return Math.round(Math.random() * 10);
}
let arr = []; //ou let arr = new Array(n); ??
let n = new Number(readlineSync.question('Choose a number : '));
function multiRand(n) {
    for (i = 0; i < n; i++) {
        arr.push(rand10 ());
    }
    return arr;
}
console.log(multiRand(n));
