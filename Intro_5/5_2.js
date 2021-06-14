const readlineSync = require('readline-sync');
//Exo 5.2
/*let cast = [];
let n = new Number(readlineSync.question('How many actors do you remember ?  '));

function multiRand(n) {
        for (i = 0; i < n; i++) {
            cast.push(rand10 ());
        }
        return cast;
    };

function randomizeCast(tvSerie) {
    let User = new askTvSerie((readlineSync.question("What's your favorite serie ? ")), (readlineSync.question('What is its production year ? ')), cast);
    function askTvSerie(Sname, Prod, cast) {
        this.Name = Sname;
        this.ProductionYear = Prod;
        this.castMembers = cast;
    };
    function rand10() {
        return tvSerie => Math.round(Math.random() * 10);
    };    
    return tvSerie;
}

console.log(randomizeCast(tvSerie));*/

/*let cast = [];
let favSer = new String(readlineSync.question("What's your favorite serie ? "));
let prodYe = new String(readlineSync.question('What is its production year ? '));
let n = new Number(readlineSync.question('How many actors do you remember ?  '));

function multiRand(n) {
    for (i = 0; i < n; i++) {
        new String(readlineSync.question('Tell me who : '))
        cast.push();
    }
    return cast;
};
console.log('Your favorite serie is ' + favSer + '. It has been released in ' + prodYe + '. And some of the actors were : ' + cast.Math.random());
*/
function askTvSerie() {
    let serie = {
        actors : []
    };
    serie.name = readlineSync.question("Name of the serie : ");
    serie.year = new Number(readlineSync.question("Year of release : "));

    let nActors = new Number(readlineSync.question("How many actors do you have in there ? "));
    for (let i = 1; i <= nActors; i++) {
        serie.actors.push(readlineSync.question("Actor number " + i + " of the serie : "));
               
    }
    return serie;
}
function randomizeCast(tvSerie) {
    return tvSerie.actors.sort(() => Math.random() - 0.5);
}
let askSerie = askTvSerie();
let shuffle = randomizeCast(askSerie);
console.log("If we sort them at random, it will give you this cast for a new serie : " , shuffle)

//à revoir - Exo fait avec Evelyne et Adrien