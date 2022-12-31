// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5
const preLoadingSelector = document.querySelector("div.preload")

let preLoading = () => {

    preLoadingSelector.getElementsByClassName.opacity = "0";

    setTimeout(() => {
        preLoadingSelector.style.display = "none";
    }, 5000);
}

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let results = document.getElementById("results");

let calculate = () => {

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let totalAmountOfMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration)/2 * kids);
    let totalAmountOfBeer = beerPerPerson(duration) * adults;
    let totalAmountOfDrinks = drinksPerPerson(duration) * adults + (drinksPerPerson(duration)/2 * kids);

    results.innerHTML =  `<p>${totalAmountOfMeat/1000} Kg of meat</p>`
    results.innerHTML +=  `<p>${Math.ceil(totalAmountOfBeer/355)}  beer cans</p>`
    results.innerHTML +=  `<p>${Math.ceil(totalAmountOfDrinks/2000)} drink bottles</p>`
}

let meatPerPerson = (duration) => {

    if(duration >= 6){
        return 650;
    }else {
        return 400;
    }
}

let beerPerPerson = (duration) => {

    if(duration >= 6){
        return 2000;
    }else {
        return 1200;
    }
}

let drinksPerPerson = (duration) => {

    if(duration >= 6){
        return 1500;
    }else {
        return 1000;
    }
}