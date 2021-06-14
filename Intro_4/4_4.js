const readlineSync = require('readline-sync');
// Exo 4.4


/*let arr = [10, 11, 12, 13];
function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(average(arr));

function min(arr) {
    const min = Math.min.apply(null, arr);
    return min;
}
console.log(min(arr));

function max(arr) {
    const max = Math.max.apply(null, arr);
    return max;
}
console.log(max(arr));
function rand10() {
    return Math.round(Math.random() * 10);
}*/

let arr = [];
let n = new Number(readlineSync.question('Choose a number : '));

function rand10() {
    return Math.round(Math.random() * 10);
}

function multiRand(n) {
    for (i = 0; i < n; i++) {
        arr.push(rand10 ());
    }
    return arr;
}

function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function min(arr) {
const min = Math.min.apply(null, arr);
return min;
}

function max(arr) {
const max = Math.max.apply(null, arr);
return max;
}

console.log('Here is your array : ' + multiRand(n) + '. Here is its average : ' + average(arr) + '. Here is its minimum : ' + min(arr) + '. And its maximum : ' + max(arr) + '.');

// Création de multiples fonctions afin de les séparer et pouvoir les utiliser indépendemment

/*function averagator () {
    function multiRand(n) {
        while (i < n) {
        arr.push(rand10 ());
        let stop = i < n;
        } if () {
            let stop = !(i < n);
            break;
        }
        return arr;
}
    do {
        average(arr);
        min(arr);
        max(arr);
}   while (stop = !(i < n));
}*/




