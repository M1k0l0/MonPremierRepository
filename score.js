const prompt = require("prompt-sync")();
const choice = require("./jouer");
const word = require("./jouer");

/**
 * @function score
 * @param {number[]} scorePourIA 
 * @param {number[]} scorePourJoueur
 * @param {string} choice
 * @param {string} word
 * @returns string
 */
function score(scorePourIA, scorePourJoueur, choice, word) {
    if ((choice == "feu") && (word == "plante")) {
        scorePourJoueur.push(1);
        console.log("Le score est , IA :" + scorePourJoueur.length + ", vous :" + scorePourIA.length);
    }
    else if ((choice == "plante") && (word == "feu")) {
        scorePourIA.push(1);
        console.log("Le score est , IA :" + scorePourIA.length + ", vous :" + scorePourJoueur.length);
    }
    if ((choice == "eau") && (word == "feu")) {
        scorePourJoueur.push(1);
        console.log("Le score est , IA :" + scorePourJoueur.length + ", vous :" + scorePourIA.length);
    }
    else if ((choice == "feu") && (word == "eau")) {
        scorePourIA.push(1);
        console.log("Le score est , IA :" + scorePourIA.length + ", vous :" + scorePourJoueur.length);
    }
    if ((choice == "plante") && (word == "eau")) {
        scorePourJoueur.push(1);
        console.log("Le score est , IA :" + scorePourJoueur.length + ", vous :" + scorePourIA.length);
    }
    else if ((choice == "eau") && (word == "plante")) {
        scorePourIA.push(1);
        console.log("Le score est , IA :" + scorePourIA.length + ", vous :" + scorePourJoueur.length);
    }
    if (choice == word) {
        let rejouer = prompt("Voulez-vous rejouer ou garder le score ?(oui/non)");
        if(rejouer == "oui"){
            choice = +prompt("Veillez mettre votre choix :")
            word = cards[Math.floor(Math.random() * cards.length)]
            console.log("Le cartes de l'IA est : " + word);
            verifier(choice, word);
        }
        if(rejouer == "non"){
        console.log("Egalité");
        }
    }
}

exports.score = score;