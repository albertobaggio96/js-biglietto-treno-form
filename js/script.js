const euroKm = 0.2762;

const buttonCalculator = document.querySelector("button");

buttonCalculator.addEventListener("click", function(){
const kmToGo = parseInt(document.querySelector("input#km").value);
console.log("km", kmToGo);

const yourAge = parseInt(document.querySelector("input#age").value);
console.log("age", yourAge);

let ticketCost = euroKm * kmToGo;
console.log("prezzo intero", ticketCost);

  if(yourAge < 18){
    ticketCost *= 0.825;
    console.log("Prezzo per minorenni", ticketCost);
  } else if (yourAge > 65){
    ticketCost *= 0.667;
    console.log("Prezzo per over 65", ticketCost);
  }

  document.querySelector("p").innerHTML= `Il tuo biglietto costa ${ticketCost.toFixed(2)}`;
})
