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
let mochiImage =  "images/mochi.svg"
let pepperImage = "images/pepper.svg"
// Pet elements
let petImage =       document.getElementById("pet-image")
let petName =        document.getElementById("pet-name")
let petDescription = document.getElementById("pet-description")
let adoptionStatus = document.getElementById("adoption-status")
// Button elements
let nextPetButton =  document.getElementById("next-pet")
let favPetButton =   document.getElementById("favorite-pet")
let adoptPetButton = document.getElementById("adopt-pet")
let resetButton =    document.getElementById("reset-card")

function eee() {
    document.getElementById("nextPetButton").click()
}