// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.


/* 
- chiedere all'utente quanti chilometri in numero vuole percorrere e memorizzarli
- chiedere all'utente quanti anni ha e memorizzarli
- calcolare il prezzo del biglietto: moltiplicare per 0.21 i chilometri memorizzati
? SE gli anni sono minori di 18
  * applicare sconto del 20%
: ALTRIMENTI 
    ? SE gli anni sono maggiori di 65
    * applicare sconto del 40%
- stampare output finale in forma umana con massimo due decimali
*/

let userAge = parseInt(prompt(`Ciao, quanti anni hai (espressi in cifre)?`));
if(isNaN(userAge)) {
  let userAge = parseInt(prompt(`Scusa, non ho capito. Quanti anni hai (espressi in cifre)?`));

}

document.writeln(`L'utente ha ${userAge} anni`);

let userKm = parseFloat(prompt(`Quanti chilometri (espressi in cifre) vuoi percorrere?`));
document.writeln(`e vuole percorrere ${userKm.toFixed(2)} chilometri.
`);
let ticketPrice = parseFloat(userKm * 0.21);
console.log(ticketPrice);
if(userAge < 18) {
  let discountMinors = ticketPrice - (ticketPrice / 100 * 20);
  document.writeln(`Il prezzo finale del biglietto richiesto è di ${discountMinors.toFixed(2)} €`);
} else if(userAge > 65) {
  let discountSeniors = ticketPrice - (ticketPrice / 100 * 40);
  document.writeln(`Il prezzo finale del biglietto richiesto è di ${discountSeniors.toFixed(2)} €`);
} else {
  document.writeln(`Il prezzo finale del biglietto richiesto è di ${ticketPrice.toFixed(2)} €`);
}
