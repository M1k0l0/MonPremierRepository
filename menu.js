const prompt = require("prompt-sync")();
/**
 * @function start 
 */

function start(){
    console.log("\n  \n  \n                づ｡◕‿‿◕｡)づ  chargement ... \n     \n    \n    \n    ");
    console.log("                                                            ");
    console.log("    ####     ##     ######   #####             ######     ##     ######   ######   ####     #######  ");
    console.log("    ##  ##   ####     ##  ##   ## ##             ##  ##   ####    # ## #   # ## #    ##       ##   # ");
    console.log("   ##       ##  ##    ##  ##   ##  ##            ##  ##  ##  ##     ##       ##      ##       ## #   ");
    console.log("   ##       ##  ##    #####    ##  ##            #####   ##  ##     ##       ##      ##       ####   ");
    console.log("   ##       ######    ## ##    ##  ##            ##  ##  ######     ##       ##      ##   #   ## #   ");
    console.log("    ##  ##  ##  ##    ##  ##   ## ##             ##  ##  ##  ##     ##       ##      ##  ##   ##   # ");
    console.log("     ####   ##  ##   #### ##  #####             ######   ##  ##    ####     ####    #######  ####### ");
    console.log("                                                                                                     ");
    let nom = prompt("Quel est votre pseudo : ");
    console.log("                                        >>>>>>>>>MENU<<<<<<<<                                         ");
    console.log("                                        | 1) JOUER          |                                         ");
    console.log("                                        | 2) QUITTER        |                                         ");
    console.log("                                        XXXXXXXXXXXXXXXXXXXXX                                         ");
    exports.nom = nom;
}


exports.start = start;