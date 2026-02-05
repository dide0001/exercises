const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const list = document.querySelector("ul")
const moreSeats = document.querySelector("#twoSeats")
const jonas = document.querySelector("#ownedByJonas")
const moreThanOne = document.querySelector("#moreThanOne")
const showAllBtn = document.querySelector("#btnAll")
const showBtnElectric = document.querySelector("#btnElectric")
const showBtnSeats = document.querySelector("#btnSeats")
const showBtnJonas = document.querySelector("#btnJonas")
const showBtnRugbrod = document.querySelector("#btnRugbrod")
showTheseVehicles(vehicles);

showAllBtn.addEventListener("click", ()=>
showTheseVehicles(vehicles));
showBtnElectric.addEventListener("click", ()=>{
  showElectricVehicles(vehicles)
})
showBtnSeats.addEventListener("click", ()=>{
  showMoreThanTwoSeats(vehicles)
})
showBtnJonas.addEventListener("click", ()=>{
showOwnedByJonas(vehicles)
})
showBtnRugbrod.addEventListener("click", ()=>{
showRugbrod(vehicles)})

function fmt(value) {
  if (value == null) return "-";                      
  return value;                               
}
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${fmt(each.fuel)}</td>
<td>${fmt(each.passengers)}</td>
<td>${fmt(each.stops)}</td>
<td>${fmt(each.ownedBy)}</td>
<td>${fmt(each.isElectric)}</td>
<td>${fmt(each.isTandem)}</td>
</tr>`;
  });
}

// showElectricVehicles(vehicles);
function showElectricVehicles(arr){
  let showElectric = arr.filter((each)=>{
    if (each.isElectric) 
      {
        return each.isElectric
      }
    })
    console.log("isElectric", showElectric)
    showTheseVehicles(showElectric)
  }
 

  // showMoreThanTwoSeats(vehicles);
  function showMoreThanTwoSeats(arr){
    let showSeats = arr.filter((each)=>{
       
        return each.passengers >= 2
      
      })
      console.log(showSeats)
      showTheseVehicles(showSeats)
      }
  
  // showOwnedByJonas(vehicles);
  function showOwnedByJonas(arr){
    let showJonas = arr.filter((each)=>{
      return each.ownedBy==="Jonas";
    })
    console.log("showJonas", showJonas)
    showTheseVehicles(showJonas)  
  }
  

  // showRugbrød(vehicles);
  function showRugbrod(arr){
    let rugbrod = arr.filter((each)=>{
      return each.fuel ==="Rugbrød" && each.passengers >=2;
    })
    console.log(rugbrod)
    showTheseVehicles(rugbrod)
    }
  


