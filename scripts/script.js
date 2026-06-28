let score = 0;

function afficherResultat () {
    let affichage = "Your final score is : " + score + " points ";
    console.log(affichage);
}


function choisirPhrasesOuMots() {
    let choose = prompt('Write "words" to get word or "phrases" to get phrases');
    while(choose != "words" && choose != "phrases"){
    choose = prompt('Write "words" to get word or "phrases" to get phrases');
    }
    return choose;
}



function lancerBoucleDeJeu(choose) {
    if(choose === "words"){
        for(let i = 0; i < listeMots.length; i++) {
        let user = prompt("Write the following word : " + listeMots[i]);
        if(user === listeMots[i]){
            score++;
            console.log("Right");
        }
    }
    } else {
        for(let i = 0; i < listePhrases.length; i++) {
            let user = prompt("Write the following sentence : " + listePhrases[i]);
            if(user === listePhrases[i]){
                score++;
                console.log("Right");
            }
        }
    }
}

function lancerJeu() {
    let chosen = choisirPhrasesOuMots();
    lancerBoucleDeJeu(chosen);
    afficherResultat();
}