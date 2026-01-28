"use strict"
const rock_btn = document.querySelector(".rock")
const paper_btn = document.querySelector(".paper")
const scissors_btn = document.querySelector(".scissors")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
let userChoice;
let computerChoice;


document.addEventListener("DOMContentLoaded", init)

function init(){
rock_btn.addEventListener("click", rockClick)
paper_btn.addEventListener("click", paperClick)
scissors_btn.addEventListener("click", scissorsClick)
player1.addEventListener("animationend", animationEnd)
}
function rockClick(){
// console.log("Rocky!")
userChoice = "rock"
computerChooses ();
}
function paperClick(){
// console.log("Paper!!")
userChoice = "paper"
computerChooses ();
}
function scissorsClick(){
// console.log ("scissor!!")
userChoice = "scissors"
computerChooses ();
}

function computerChooses (){
    computerChoice = Math.floor(Math.random () * 3)
    if (computerChoice === 0)  {
        computerChoice = "rock"
    } else if (computerChoice === 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    console.log("computerChooses ", computerChoice)
    handShakesStart();

}
function handShakesStart(){
    player1.classList.add("shake")
    player2.classList.add("shake")
}

function animationEnd(){
    player1.classList.remove("shake")
    player2.classList.remove("shake")
    player1.classList.remove("rock", "paper", "scissors")
    player2.classList.remove("rock", "paper", "scissors")
    player1.classList.add(userChoice)
    player2.classList.add(computerChoice)

    if (userChoice === computerChoice){
        console.log("uafgjordt!")
        draw.classList.remove("hidden")
        setTimeout(function(){
            draw.classList.add("hidden")
        }, 2000)
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors" )  ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
    ){
        console.log ("Du vinder!")
        win.classList.remove ("hidden")
        setTimeout(function (){
            win.classList.add("hidden")
        }, 2000)
    }
    else {
        console.log("computeren vinder!")
        lose.classList.remove ("hidden")
        setTimeout(function (){
            lose.classList.add("hidden")
        }, 2000)
    }
}