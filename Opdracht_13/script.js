const naam = prompt("Welkom! Wat is je naam?");
alert("Hey " + naam);
alert("Welkom bij: Raad het Nummer !!");
alert("Je mag nu zelf het kleinste en het grootste getal gaan bepalen");
let getal1 = prompt("Wat kies je als kleinste getal?");
let getal2 = prompt("En wat kies je als grootste getal?");
alert("Ok. Je krijgt nu 5 pogingen om het getal te raden");
alert("Het getal ligt tussen de " + getal1 + " en " + getal2);
alert("Veel succes");

let hetteradengetal = Math.round(Math.random() * (getal2 - getal1) + getal1);
console.log(hetteradengetal);

let ingevoerdewaarde = prompt("Voer nu een nummer in!");
let pogingen = 4;

while (ingevoerdewaarde !== hetteradengetal && pogingen > 0) {
  alert(
    "Helaas, dat is niet correct. Je hebt nog " + pogingen + " pogingen over"
  );
  pogingen--;
  ingevoerdewaarde = prompt("Voer nu een nummer in");
}
if (ingevoerdewaarde == hetteradengetal) {
  alert("Gefeliciteerd je hebt gewonnen");
  alert("Dag " + naam + " Tot de volgende keer!");
} else {
  alert(
    "Helaas, je hebt " +
      pogingen +
      " pogingen over. Je hebt deze keer niet gewonnen."
  );
  alert("Probeer het nog een keertje! Dag " + naam);
}
