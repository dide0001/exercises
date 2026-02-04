let Name = "hej"
let Type = "med"
let pet = "dig"


presentPet (Name, Type, pet)
function presentPet(firstName, animalType, animalName){
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

//konklusion

// "Parametre som variabler eller strings, eller andre faste værdier"
// i functionen presentPet, inde i din () som er en funktion vil den altid tage rækkefølgen af first child, second child osv i rækkefølgen. Du kan bytte dine variabler og strings ud i rækkefølge, men de ændrer sig ikke i hirakiet, den første i rækken vil også altid være den som bliver præsenteret i {firstname} aka firstChild

// "navne på variabler der bliver brugt når man kalder en function"
// Hvis jeg laver en variabel, og kalder den nede i min function, vil variablens string blive brugt i funktionen, f.eks let Name = "hej" når jeg så sætter "presentPet(Name) så vil "Hej" komme ind som firstName aka first child"

//"Rækkefølgen af parametre når man kalder en funktion"
// Fungerer på firstchild, secondChild hirakiet 

//"Antalet af parametre når man kalder en function"
// Du kan bruge så mange som du har lyst til, så længe de også bliver kaldt i din console.log, hvis du f.eks har 5 variabler, du kalder dem i "presentPet(Type, Name, pet" men du nede i din console-log ender med at kalde på 5 forskellige variabler, vil de sidste 2 være undefined 

//"Parametre der påvirker andre variabler udenfor functionen"
// Parametre påvirker ikke andre variabler udenfor funktionen.
// Når en funktion bliver kaldt, modtager den værdier som argumenter. Disse værdier bliver gemt i parametre, som kun eksisterer inde i funktionen.
// Selv hvis en variabel udenfor funktionen har samme navn som en parameter, er det ikke den samme variabel – JavaScript laver et nyt scope inde i funktionen.

