// Week 4 Mastery Project: Interactive Pet Adoption Card
// Write your solution below. Do not change the provided HTML or CSS.
//
// Plan before coding:
// - Identify the page elements your program must access.
// - Decide which named function will handle each button interaction.
// - Determine which content, properties, and attributes each function must change.
// - Register an event listener for every button.
// - Test one interaction at a time in the browser and check the console for errors.

// Pet images
const mochiImage =     "images/mochi.svg"
const pepperImage =    "images/pepper.svg"
// Pet elements
let   petImage =       document.getElementById("pet-image")
let   petName =        document.getElementById("pet-name")
let   petDescription = document.getElementById("pet-description")
const adoptionStatus = document.getElementById("adoption-status")
// Button elements
const nextPetButton =  document.getElementById("next-pet")
const favPetButton =   document.getElementById("favorite-pet")
const pressedState =   favPetButton.getAttribute("aria-pressed")
const adoptPetButton = document.getElementById("adopt-pet")
const resetButton =    document.getElementById("reset-card")


let isMochi = true // Would LOVE to make this scalable, but we haven't done anything with arrays and such lol
let isMochiFavorited = "false"
let isPepperFavorited = "false"


// Next button
nextPetButton.addEventListener("click", showAnotherPet)
function showAnotherPet() {
    if (isMochi) {
        changeToPepper() // I don't like how Mochi and Pepper are switched bu whatevs
    }
    else {
        changeToMochi()
    }
}

function changeToMochi() {
    petImage.src = mochiImage
    petImage.alt = "Mochi, a friendly cat"
    petName.textContent = "Mochi" // Ooo! textContent is more thorough and better standard
    petDescription.textContent = "A curious cat who loves sunny windows and quiet afternoons."
    isMochi = true
}

function changeToPepper() {
    petImage.src = pepperImage
    petImage.alt = "Pepper, a horrifying dog"
    petName.textContent = "Pepper"
    petDescription.textContent = "A loving dog who sniffs dirt and eats tainted souls from the dark pits of the aether."
    
    isMochi = false
}

// Favorite button
favPetButton.addEventListener("click", changeFavoritedState)

const favoritedText =   "★ Favorited"
const unfavoritedText = "☆ Favorite"
function changeFavoritedState() {
    if (isMochi) {
        if (isMochiFavorited == "true") {
            changeFavoritedButton(true)
            isMochiFavorited = "false"
        }
        else {
            changeFavoritedButton(false)
            isMochiFavorited = "true"
        }
    }
    else {
        if (isPepperFavorited == "true") {
            changeFavoritedButton(true)
            isPepperFavorited = "false"
        }
        else {
            changeFavoritedButton(false)
            isPepperFavorited = "true"
        }
    }
}

function changeFavoritedButton(favorited) {
    if (favorited) {
        favPetButton.setAttribute("aria-pressed", "true")
        favPetButton.textContent = favoritedText
    }
    else {
        favPetButton.setAttribute("aria-pressed", "false")
        favPetButton.textContent = unfavoritedText
    }
}
