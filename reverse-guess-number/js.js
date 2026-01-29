
let min = 0;
let max = 100;
let currentGuess




const message = document.querySelector("#message")
const gif = document.querySelector("#winnerGif")
const buttonTooLow = document.querySelector("#tooLow")
const buttonTooHigh = document.querySelector("#tooHigh")
const buttonCorrect= document.querySelector("#correct")

function computerGuess (){
    currentGuess= Math.floor(Math.random() * (max - min +1) + min)
    message.textContent=`Jeg gætter på ${currentGuess}`
}

computerGuess();


buttonCorrect.addEventListener("click", function() {
    message.textContent = "rigtigt!" 
    message.classList.add ("win")
    gif.classList.add ("showGif")
    buttonTooLow.disabled=true;
    buttonTooHigh.disabled=true;
    buttonCorrect.disabled=true;
    setTimeout(function(){
        message.textContent = " ";
        message.classList.remove ("win");
        gif.classList.remove("showGif");
    }, 10000)
    setTimeout (function (){
    message.classList.remove("bounce"); 
    void message.offsetWidth;
    message.classList.add("bounce");
    buttonTooLow.disabled=false;
    buttonTooHigh.disabled=false;
    buttonCorrect.disabled=false;
    min = 0;
    max = 100;
    computerGuess();
}, 10000)
});

buttonTooLow.addEventListener("click", function(){
    min = currentGuess +1
    if (min > max) {
        message.textContent = "Hvad laver du bro? Du har modsagt dig selv G";
        message.classList.remove("bounce"); 
    void message.offsetWidth;
    message.classList.add("bounce");
        setTimeout (function (){
            min=0
            max=100
            computerGuess ();
        }, 5000)
    return;
        } 
        message.classList.remove("bounce"); 
    void message.offsetWidth;
    message.classList.add("bounce");
        computerGuess()
})

buttonTooHigh.addEventListener("click", function(){
    max = currentGuess -1;
    if (min > max) {
        message.textContent = "Hvad laver du bro? Du har modsagt dig selv G";
        message.classList.remove("bounce"); 
    void message.offsetWidth;
    message.classList.add("bounce");
        setTimeout (function (){
            min=0
            max=100
            computerGuess ();
        }, 5000)
    return;
        } 
        message.classList.remove("bounce"); 
    void message.offsetWidth;
    message.classList.add("bounce");
        computerGuess()
} )