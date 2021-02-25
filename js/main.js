/* Inizializzo un nuovo array dove aggiungo tramite push 
numeri e stringhe speciali */

var listNumber = new Array();
var special;
for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0){
        special = "FizzBuzz";
        listNumber.push(special);
    } else if (i % 3 == 0) {
        special = "Fizz";
        listNumber.push(special);
    } else if (i % 5 == 0) {
        special = "Buzz";
        listNumber.push(special);
    } else {
        listNumber.push(i);
    }
}

/* Tramite ciclo for stampo su console il nuovo array creato */

for (var i = 0; i < listNumber.length; i++) {
    console.log(listNumber[i]);
}
