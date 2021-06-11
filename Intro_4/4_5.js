const readlineSync = require("readline-sync");
//Exo 5
/*let A = [1, 1];
let B = [2, 2];
let xAB = Math.pow((B[0] - A[0]), 2);
let yAB = Math.pow((B[1] - A[1]), 2);
let tot = Math.sqrt(xAB + yAB);
console.log(tot)*/
let x1 = new Number(readlineSync.question('Can you give the X of your first point ? '));
let y1 = new Number(readlineSync.question('Now its Y : '));
let x2 = new Number(readlineSync.question('The X of your second point : '));
let y2 = new Number(readlineSync.question('And, finally, its Y : '));
let A = [x1, y1];
let B = [x2, y2];
function calcDistance(A, B) {
    let xAB = Math.pow((B[0] - A[0]), 2);
    let yAB = Math.pow((B[1] - A[1]), 2);
    return tot = Math.sqrt(xAB + yAB);
}
console.log(calcDistance(A, B));