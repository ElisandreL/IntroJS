const readlineSync = require('readline-sync');
// Exo 6.2
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
            }; /* si le second rectangle créé touche le premier, le retour sera un true*/
    }
}

let form = new Rectangle(5, 5, 10, 10)
let form2 = new Rectangle(20, 20, 1, 5) //permet de créer un second rectangle

console.log(form.collides(form2))



/*class Circle {
    constructor(xPos, yPos, radius) {
        this.xAxe = xPos;
        this.yAxe = yPos;
        this.Radius = radius;
    } 
    move(xOffset, yOffset) {
        this.xAxe += xOffset;
        this.yAxe += yOffset;
    }
    get surface() {
    let A = (Math.pow(this.Radius, 2))* Math.PI;
    return A;
    }
}

let form = new Circle(20, 30, 50);
console.log(form.xAxe, form.yAxe);
form.move(new Number (readlineSync.question("How many X ? ")), new Number(readlineSync.question('How many y ? ')));
console.log(form.xAxe, form.yAxe);*/
