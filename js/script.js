// costante costo al km
const euroKm = 0.2762;

// selezione del bottone che avvia al calcolo del costo del biglietto
const buttonCalculator = document.querySelector("button");

// click bottone che avvia al calcolo del costo del biglietto
buttonCalculator.addEventListener("click", function(){

  // valori dei km inseriti
  const kmToGo = parseInt(document.getElementById("km").value);
  console.log("km", kmToGo);

  // valori dell'età inserita
  const yourAge = parseInt(document.getElementById("age").value);
  console.log("age", yourAge);

  // calcolo costo biglietto intero
  let ticketCost = euroKm * kmToGo;
  console.log("prezzo intero", ticketCost);

  // verifica se si ha diritto ad uno sconto
  if(yourAge < 18){
    ticketCost *= 0.825;
    console.log("Prezzo per minorenni", ticketCost);
  } else if (yourAge > 65){
    ticketCost *= 0.667;
    console.log("Prezzo per over 65", ticketCost);
  }

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const startFrom= document.getElementById("start").value;

  // scrittura nel DOM il costo del biglietto per il passeggero
  document.querySelector("p").classList.add("d-none");
  document.querySelector("div.d-none").classList.remove("d-none")

  document.querySelector("span.your-name").innerHTML= `${name}`;
  document.querySelector("span.your-surname").innerHTML= `${surname}`;
  document.querySelector("span.your-age").innerHTML= `${yourAge}`;
  document.querySelector("span.strat-from").innerHTML= `${startFrom}`;
  document.querySelector("span.my-km").innerHTML= `${kmToGo}`;
  document.querySelector("span.my-price").innerHTML= `${ticketCost.toFixed(2)}`;


})

