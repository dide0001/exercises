"use strict"
console.log("fisse")
const inputField1 = document.querySelector("#inputField1")
const inputField2= document.querySelector("#inputField2")
const multiplier= document.querySelector("#multiplier")
const calculateButton= document.querySelector("#calculateButton")
const resultField = document.querySelector("#resultField")

calculateButton.addEventListener("click", function(){
    let value1 = Number(inputField1.value);
    let value2 = Number(inputField2.value)

    let result;
    if (multiplier.value === "*") {
        result = value1 * value2;
    }
    else if (multiplier.value==="+"){
      result = value1 + value2;}
      else if (multiplier.value === "-"){
        result = value1 - value2;
      }
      else{
        result = value1 / value2;
      }
      resultField.value = result;
  })
