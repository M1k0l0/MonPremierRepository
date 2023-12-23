const prompt = require("prompt-sync")();

let cards = ["feu", "eau", "plante"];
function say() {
    console.log("Les cartes disponibles sont :" + cards);
    console.log("\n ");
}

function rules(a) {
    let i = 1;


    while (i <= 3) {
        let choice = +prompt("Veillez mettre votre choix :")
        let word = cards[Math.floor(Math.random() * cards.length)]
        console.log("Le cartes de l'IA est : " + word);

        let pseudo = 0;
        let IA = 0;
        
        if ((choice == "feu") && (word == "plante")) {
            pseudo++;
            console.log("Le score est , vous :" + pseudo + ", IA : " + IA);
        }
        else if ((choice == "plante") && (word == "feu")) {
            IA++;
            console.log("Le score est , IA :" + IA + ", vous :" + pseudo);
        }
        if ((choice == "eau") && (word == "feu")) {
            pseudo++ +
            console.log("Le score est , vous : " + pseudo + " , IA :" + IA);
        }
        else if ((choice == "feu") && (word == "eau")) {
            IA++ +
                console.log("Le score est , IA : " + IA + " , vous :" + pseudo);
        }
        if ((choice == "plante") && (word == "eau")) {
            pseudo++ +
            console.log("Le score est , vous :" + pseudo + " , IA :" + IA);
        }
        else if ((choice == "eau") && (word == "plante")) {
            IA++ +
            console.log("Le score est, IA :" + IA + " , vous :" + pseudo);
        }
        if (choice == word) {
            console.log("Egalité");
        }
    }
}

function play() {
    say();;
    rules();
}

play()