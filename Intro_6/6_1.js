const readlineSync = require('readline-sync');
//Exo 6.1

class Circle {
    constructor(xPos, yPos, radius) { //constructeur des variables du cercle
        this.xAxe = xPos;
        this.yAxe = yPos;
        this.Radius = radius;
    } 
    move(xOffset, yOffset) {
        this.xAxe += xOffset; //permet d'additionner les nouvelles variables
        this.yAxe += yOffset;
    }
    get surface() {
    let A = (Math.pow(this.Radius, 2))* Math.PI; //permet de retrouver la surface (radius au carré * PI)
    return A;
    }
}

let form = new Circle(20, 30, 50);
console.log(form.xAxe, form.yAxe);
form.move(new Number (readlineSync.question("How many X ? ")), new Number(readlineSync.question('How many y ? ')));
console.log(form.xAxe, form.yAxe);
