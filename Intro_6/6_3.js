const readlineSync = require('readline-sync');
//Exo 6.3
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.XPosLeft = topLeftXPos;
        this.YPosLeft = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (this.XPosLeft < otherRectangle.XPosLeft + otherRectangle.width &&
            this.XPosLeft + this.width > otherRectangle.XPosLeft &&
            this.YPosLeft < otherRectangle.YPosLeft + otherRectangle.length &&
            this.length + this.YPosLeft > otherRectangle.YPosLeft) {
                return true
            }
            else {
                return false
            };
    }
}

let form = new Rectangle(5, 5, 10, 10)
let form2 = new Rectangle(20, 20, 1, 5)
//let formRan = new Rectangle((Math.round(Math.random() * 10)), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10));

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

console.log(form.collides(form2))