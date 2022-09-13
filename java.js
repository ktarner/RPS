"use strict";

const computerChoiceDisplay = document.getElementById('comPicked');
const userChoiceDisplay = document.getElementById('uPicked')
const resultDisplay = document.getElementById('winner')
const allOptions = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result
let rounds = 0

if (rounds < 3) {
allOptions.forEach(allOptions => allOptions.addEventListener('click', (e) => {
    yourChoice = e.target.id
    userChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult()
}))
rounds++
console.log(rounds)
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

//get the result

function getResult() {
    if (computerChoice === yourChoice) {
        result = 'it is a tie!'
    }
    if (computerChoice === 'rock' && yourChoice === "paper") {
        result = 'you!!!'
    }
    if (computerChoice === 'rock' && yourChoice === "scissors") {
        result = 'computer'
    }
    if (computerChoice === 'paper' && yourChoice === "scissors") {
        result = 'you!!!'        
    }
    if (computerChoice === 'paper' && yourChoice === "rock") {
        result = 'computer'
    }
    if (computerChoice === 'scissors' && yourChoice === "rock") {
        result = 'you!!!'
    }
    if (computerChoice === 'scissors' && yourChoice === "paper") {
        result = 'computer'
    }
    resultDisplay.innerHTML = result
}

