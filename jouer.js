const prompt = require("prompt-sync")();
const nom = require("./menu");
const score = require("./score");

/**
 * @function say
 * @returns string[] 
*/

let cards = ["feu", "eau", "plante"];
function say() {
    console.log("Les cartes disponibles sont : " + cards);
    console.log("\n ");
}

/**
 * @function jouer
 * @returns string
 */
function jouer() {
    say();
    rule();
}

let scorePourIA = [];
let scorePourJoueur = [];

/**
 * @function rule
 * @returns string
 */
function rule() {
    for(let i = 0; i < 3; i++) {
        let choice = prompt("Veillez mettre votre choix " + nom.nom + " :")
        let word = cards[Math.floor(Math.random() * cards.length)]
        console.log("La carte de l'IA est : " + word);
        score.score(scorePourIA, scorePourJoueur, choice, word)
    }
}


exports.jouer = jouer;