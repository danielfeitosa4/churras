// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let results = document.getElementById("results");

let calculate = () => {
    console.log("calculando...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let totalAmountOfMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration)/2 * kids);
    console.log(totalAmountOfMeat);
}

let meatPerPerson = (duration) => {

    if(duration >= 6){
        return 650;
    }else {
        return 400;
    }

}