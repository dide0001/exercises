import { getRandomNumber } from "./utils/utils_lib.js";
import {$} from "./utils/utils_lib.js"
import {$$} from "./utils/utils_lib.js"


console.log("getRandumNumber", getRandomNumber(3))

$(".mitPTag").innerHTML="FISEEEE";

$$(".myListElement").forEach((elm, i)=>{
    elm.innerHTML="Hej" + i;
});