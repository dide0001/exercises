"use strict"
const body = document.querySelector("body")
// console.log("tema", body.dataset.theme)

function themeSwitcher(whichTheme){
   body.dataset.theme = whichTheme
}
const whichTheme = document.querySelector("#dropdown")
whichTheme.addEventListener("change", (event) =>{
    console.log("denne er valgt", event.target.value)
     const switcher = event.target.value
     themeSwitcher(switcher)
    })



