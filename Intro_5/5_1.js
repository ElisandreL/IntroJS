const readlineSync = require('readline-sync');
// Exo 5.1
    //let name = new String(readlineSync.question("What's your favorite serie ? "));
    //let Prod = new Number(readlineSync.question('What is its production year ? '));
    //let cast = new String(readlineSync.question('Can you tell some members of the cast ? '));

    function askTvSerie(name, Prod, cast) {
        this.Name = name;
        this.ProductionYear = Prod;
        this.castMembers = cast;
    }
    let User = new askTvSerie((readlineSync.question("What's your favorite serie ? ")), (readlineSync.question('What is its production year ? ')), (readlineSync.question('Can you tell some members of the cast ? ')));
    
    /* The result will be : 

    askTvSerie {
        Name: 'Buffy',
        ProductionYear: '1997',
        castMembers: 'Sarah Michelle Gellar'
    }

    we also can do : 
    let name = new String(readlineSync.question("What's your favorite serie ? "));
    let Prod = new Number(readlineSync.question('What is its production year ? '));
    let cast = new String(readlineSync.question('Can you tell some members of the cast ? '));
    let User = new askTvSerie(name, Prod, cast);
    to have : 

    askTvSerie {
        Name: [String: 'Buffy'],
        ProductionYear: [Number: 1997],
        castMembers: [String: 'Sarah Michelle Gellar']
    }
*/
    console.log(User);