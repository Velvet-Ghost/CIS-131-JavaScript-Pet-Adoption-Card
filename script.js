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
const nextButton =     document.getElementById("next-pet")
const favoriteButton = document.getElementById("favorite-pet")
let   pressedState =   favoriteButton.getAttribute("aria-pressed")
const adoptButton =    document.getElementById("adopt-pet")
const resetButton =    document.getElementById("reset-card")

nextButton.addEventListener("click", showAnotherPet)
let pressed = false
function showAnotherPet() {
    petImage.src = pepperImage
    petImage.alt = "Pepper, a horrifying dog"
    petName.textContent = "Pepper"
    petDescription.textContent = "A loving dog who sniffs dirt and eats tainted souls from the dark pits of the aether."
    
    if (pressed == false) {
        favoriteButton.setAttribute("aria-pressed", "false")
        favoriteButton.textContent = "☆ Favorite"

        adoptionStatus.textContent = "Adopt me"
        adoptButton.disabled = false
    }
    pressed = true
}

favoriteButton.addEventListener("click", toggleFavorite)
function toggleFavorite() {
    pressedState = favoriteButton.getAttribute("aria-pressed")
    if (pressedState === "true") {
        favoriteButton.setAttribute("aria-pressed", "false")
        favoriteButton.textContent = "☆ Favorite"
    }
    else if (pressedState === "false") {
        favoriteButton.setAttribute("aria-pressed", "true")
        favoriteButton.textContent = "★ Favorited"
    }
}

adoptButton.addEventListener("click", adoptPet)
function adoptPet() {
    adoptionStatus.textContent = "Adoption Pending"
    adoptButton.disabled = true
}

resetButton.addEventListener("click", resetCard)
function resetCard() {
    petImage.src = mochiImage
    petImage.alt = "Mochi, a friendly cat"
    petName.textContent = "Mochi"
    petDescription.textContent = "A curious cat who loves sunny windows and quiet afternoons."

    favoriteButton.setAttribute("aria-pressed", "false")
    favoriteButton.textContent = "☆ Favorite"

    adoptionStatus.textContent = "Adopt me"
    adoptButton.disabled = false
    pressed = false
}

