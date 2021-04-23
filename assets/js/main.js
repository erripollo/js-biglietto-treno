//Istruzioni:
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var km = parseInt(prompt('Quanti km devi percorrere?'));
console.log('km ' + km);

//e l'età del passeggero.
var age = parseInt(prompt('Quanti anni hai?'));
console.log('Età ' + age + ' anni');

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
var priceKm = 0.21;
var cost = km * priceKm;
console.log('costo ' + cost.toFixed(2) + ' €');

//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

/* Prima soluzione - Scartata
var discount;
if (age < 18) {
    discount = 0.8
}else if (age > 65) {
    discount = 0.6
} else {
    discount = 1
}
var total = cost * discount
*/


var discount20 = ((cost / 100) * 20).toFixed(2);
//console.log(discount20);

var discount40 = ((cost / 100) * 40).toFixed(2);
//console.log(discount40);

var discount;

if (age < 18) {
    discount = discount20;
    console.log('Sconto under18 -' + discount + ' €');
}else if (age > 65) {
    discount = discount40;
    console.log('Sconto over65 -' + discount + ' €');
}else {
    discount = 0;
    console.log('Non hai diritto a nessuno sconto');
}

//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

var total = cost - discount
console.log('totale ' + total.toFixed(2) + ' €');