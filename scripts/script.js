let i = 0
let score = 0
let nbMotsProposes = listeMots.length

let listeProposition = listeMots




function afficherResultat(score, nbMotsProposes) {
    let affichage = document.querySelector(".zoneScore span")
    
    let displayScore = `${score} / ${nbMotsProposes}`

    affichage.innerText = displayScore
}

        function afficherProposition(proposition) {
            let prop = document.querySelector(".zoneProposition")
            prop.innerText = proposition
        }  

let baliseOptionSource = document.querySelectorAll(".optionSource input")
for (let s = 0; s < baliseOptionSource.length; s++) {
    baliseOptionSource[s].addEventListener("change", (event) => {
        console.log(event.target.value)
        if(event.target.value === "1") {
            listeProposition = listeMots
        } else {
            listeProposition = listePhrases
        }
        afficherProposition(listeProposition[i])
    })
}


function lancerJeu() {
    let click = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listeProposition[i])
    click.addEventListener('click', ()=> {
        if(inputEcriture.value === listeProposition[i]) {
            score++
            afficherResultat(score, nbMotsProposes)
        } else {
            afficherResultat(score, nbMotsProposes)
        }
        i++
        inputEcriture.value = ""
        if(listeProposition[i] === undefined){
            afficherProposition("Le jeu est fini")
            click.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })
    
    afficherResultat(score, nbMotsProposes)
}


let form = document.querySelector(".popup form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("Arret de l'envoi")

        let nom = document.getElementById("nom")
        let email = document.getElementById("email")


    })


function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

/* Pour pouvoir enlever les espaces vides d'un input on peut utiliser trim() */ 
