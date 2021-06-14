const readlineSync = require('readline-sync');
//Exo 5.2
let cast = [];
let User = new askTvSerie((readlineSync.question("What's your favorite serie ? ")), (readlineSync.question('What is its production year ? ')), cast);
let n = new String(readlineSync.question('Can you tell me some actors ?  '));

function multiRand(n) {
        for (i = 0; i < n; i++) {
            cast.push(rand10 ());
        }
        return cast;
    };

function randomizeCast(tvSerie) {
    function askTvSerie(Sname, Prod, cast) {
        this.Name = Sname;
        this.ProductionYear = Prod;
        this.castMembers = cast;
    };
    function rand10() {
        return Math.round(Math.random() * 10);
    };    
    
}

console.log(randomizeCast);