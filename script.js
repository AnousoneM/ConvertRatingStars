function convertRating(rating) {

    // Nous convertissons la donnée en nombre et nous divisons par 2
    let newRating = Number(rating) / 2

    // Contiendra les étoiles à afficher
    let stars = ''

    // permet de savoir si le résultat est un nombre entier
    console.log(Number.isInteger(newRating))
    // permet d'arrondir à l'entier inférieur
    console.log(Math.floor(newRating))
    // permet d'arrondir à l'entier supérieur
    console.log(Math.round(newRating))

    if (isNaN(newRating)) {
        stars = `Veuillez entrer une évaluation valide`
    } else if (Number.isInteger(newRating)) {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
        // nous comparons si nous devons rajouter une étoile selon les arrondies, ex . 4 et 5, il faut une demi étoile en plus
    } else if (Math.floor(newRating) != Math.round(newRating)) {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
        // nous rajoutons à la fin la demi étoile
        stars += `<i class="bi bi-star-half"></i>`
    } else {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
    }

    return stars

}

// Nous mettons en place un écouteur sur le click du bouton et nous lançons notre fonction selon la valeur de l'input
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('#stars').innerHTML = convertRating(document.querySelector('#rating').value)
})

// Nous allons également mettre en place le lancement de la fonction lorsque nous faisons enter
console.log(window.addEventListener('keydown', event => {
    if (event.key == 'Enter') {
        document.querySelector('#stars').innerHTML = convertRating(document.querySelector('#rating').value)
    }
}))


