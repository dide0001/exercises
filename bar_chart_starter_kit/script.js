const list = document.querySelector("ul");


// const li = document.createElement("li");
// list.appendChild(li);
const columnArray= [];

setInterval(generateColumns, 1000);

function generateColumns(){
    columnArray.push(Math.round(Math.random()*100))
    list.innerHTML=""
    console.log("columnArray", columnArray)
    columnArray.forEach((height)=>{
        const li = document.createElement("li");
        li.style.setProperty("--height", height);
        list.appendChild(li);
    })
    if (columnArray.length > 19){
        columnArray.shift()
    }
}