
import {computerChoice} from "./utils/utils_lib.js" 

const rock_btn = document.querySelector(".rock")
const paper_btn = document.querySelector(".paper")
const scissors_btn = document.querySelector(".scissors")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
let userChoice;
let comChoice;



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
    let n = computerChoice();
    if (n === 0)  {
        n = "rock"
    } else if (n === 1) {
        n = "paper"
    }
    else {
        n = "scissors"
    }
    comChoice = n;
    console.log("computerChooses ", n)
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
    player2.classList.add(comChoice)

    if (userChoice === comChoice){
        console.log("uafgjordt!")
        draw.classList.remove("hidden")
        setTimeout(function(){
            draw.classList.add("hidden")
        }, 2000)
    }
    else if (
        (userChoice === "rock" && comChoice === "scissors" )  ||
    (userChoice === "paper" && comChoice === "rock") ||
    (userChoice === "scissors" && comChoice === "paper")
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