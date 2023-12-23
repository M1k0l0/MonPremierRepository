const prompt = require("prompt-sync")();
const jouer = require("./jouer");
/**
 * @function user
 * @returns number
 */
function user() {
    let choix = prompt("Veillez choisir entre les choix du menu : ");
    if(choix == 1) {
        console.log("   \n    ");
        jouer.jouer();
    }
    if (choix == 2) {
        console.log ("Merci d'avoir jouer ." + "づ｡◕‿‿◕｡)づ");
    }
}


exports.user = user;