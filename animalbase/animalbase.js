"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];


const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};
const settings = {
    filterBy: "all",
    sortBy: "name",
    sortDir: "asc"
};


function start( ) {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
    registerButtons();
    updateSortArrow();
    loadJSON();
}

function registerButtons(){
    document.querySelectorAll("[data-action='filter']").forEach(button => button.addEventListener("click", selectFilter));

    document.querySelectorAll("[data-action='sort']").forEach(button => button.addEventListener("click", selectSort));
}

function updateSortArrow() {
    document.querySelectorAll("[data-action='sort']").forEach((btn) => {
        // store original label once
        if (!btn.dataset.baseLabel) {
            btn.dataset.baseLabel = btn.textContent.trim();
        }

        btn.textContent = btn.dataset.baseLabel;

        if (btn.dataset.sort === settings.sortBy) {
            btn.textContent += settings.sortDir === "asc" ? " ↑" : " ↓";
        }
    });
}

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( prepareObject );

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function prepareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

function selectFilter(event){
    const filter = event.target.dataset.filter;
    console.log(`User selected ${filter}`)
    setFilter(filter);
}

function setFilter(filter) {
    settings.filterBy = filter;
    buildList();
}
function filterList() {
    let filteredList = allAnimals;

    if (settings.filterBy === "cat") {
        filteredList = allAnimals.filter(isCat);
    } else if (settings.filterBy === "dog") {
        filteredList = allAnimals.filter(isDog);
    } else {
        filteredList = allAnimals;
    }

    return filteredList;
}

function isCat (animal){
    return animal.type === "cat"
}

function isDog (animal){
    return animal.type === "dog"
}


function selectSort(event){
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;

    if(sortDir === "asc"){
        event.target.dataset.sortDirection = "desc"
    } else{
        event.target.dataset.sortDirection = "asc"
    }
    const newDir = event.target.dataset.sortDirection;
    console.log(`User selected ${sortBy} - ${newDir}`)
    setSort(sortBy, newDir)
}

function setSort(sortBy, sortDir){
    settings.sortBy = sortBy;
    settings.sortDir = sortDir;
    updateSortArrow();
    buildList();
}

function sortList(sortedList) {
    let direction = 1;
    if (settings.sortDir === "desc") {
        direction = -1;
    }
     
        sortedList = sortedList.sort(sortByProperty);
      

        function sortByProperty(animalA, animalB){
            if (animalA[settings.sortBy] < animalB[settings.sortBy]){
                return -1 * direction
            } else {
                return 1 * direction;
            }
        }
    return sortedList;
}

function buildList() {
    const currentList = filterList();
    const sortedList = sortList(currentList);

    displayList(sortedList);
}


function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}
