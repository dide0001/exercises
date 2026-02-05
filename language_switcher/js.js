"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
Change()


document.querySelector("#dropdown").addEventListener("change", (event) => { 
  locale = event.target.value
  Change ()
})

function Change (){
  texts[locale].texts.forEach((elm)=>{
    if (elm.location === ".footer") {
      document.querySelector(elm.location).innerHTML = `${elm.text}`
    } else {
      document.querySelector(elm.location).innerHTML = `${elm.text}`
    }
    console.log(elm.location)
  })
}


