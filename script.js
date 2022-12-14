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

    // Si nous n'arrivons pas à convertir en nombre, on affiche un message d'erreur
    if (isNaN(newRating) || (newRating * 2) > 10 ) {
        stars = `Veuillez entrer une évaluation valide`
        // Nous allons vérifier si le résultat est un nombre entier
    } else if (Number.isInteger(newRating)) {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
        // nous rajoutons également la note sur 10
        stars += `<span class="text-dark mx-2">(${newRating})</span>`
        // nous comparons si nous devons rajouter une étoile selon les arrondies, ex . 4 et 5, il faut une demi étoile en plus
    } else if (Math.floor(newRating) != Math.round(newRating)) {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
        // nous rajoutons à la fin la demi étoile
        stars += `<i class="bi bi-star-half"></i>`
        // nous rajoutons également la note sur 10
        stars += `<span class="text-dark mx-2">(${newRating})</span>`
    } else {
        for (i = 1; i <= newRating; i++) {
            stars += `<i class="bi bi-star-fill"></i>`
        }
        // nous rajoutons également la note sur 10
        stars += `<span class="text-dark mx-2">(${newRating})</span>`
    }

    // Nous retournons donc les étoiles
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


