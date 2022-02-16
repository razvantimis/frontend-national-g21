// operati aritmetice
// doua valori cu operatie => o expresie
console.log(1 + 2)
console.log(1 - 2)
console.log(1 / 2) // impartire
console.log(1 * 2) // imultire
console.log(1 % 2) // modul

console.log((1 + 3) * 4 - 10 / 3);

var firstNumber = 10;

// intr-o expresie peste tot unde folosim o valoare putem inlocui cu o variabila
console.log(firstNumber + firstNumber / 10 + firstNumber * 3)

// operati logice

var number1 = 10;

comsole.log(number1 > 11) // rezultatul va fi o valoare true sau false
console.log(number1 < 11);
console.log(number1 <= 11);
console.log(number1 >= 11);
console.log(number1 !== 11); // verificam daca numar1 este diferit de valoare 11
console.log(number1 == 10) // daca valoare din variabila numar1 este egala cu valoare 10

// operatori logici
// AND - && , OR - ||, ! - negatie

// AND logic - && - ambele trebuie sa fie true => true
console.log(false && false) // false
console.log(false && true) // false
console.log(true && true) // true

// OR logic - || - una sau alta sa fie true => true
console.log(false || false) // false
console.log(false || true) // true
console.log(true || true) // true

console.log(!false) // true
console.log(!!false) // false

var number1 = 10;

console.log(number1 == 10 && number1 > 11 && (number1 - 10 == 0) || (number1 < 11 && number1 != 10)) // false


// Truthy (javascript particular )
// !! va transaforma orice valoare in true sau false
var number = 0;

console.log('number = 0', !!number); // false
console.log('number > 0', !!10); // true
console.log('string asdsaas', !!'asdsaas'); // true
console.log('string empty ', !!''); // false

console.log(!!undefined) // false
console.log(!!null) // false


// == vs ===

var number1 = 10;

// compara doar valorile
console.log(number1 == 10) // true

var number1 = 10;
// cand folosim orice operatie , js incerca sa transforme valorile pentru a efecta operatia
console.log(number1 == "10")

// compara valorile si tipurile
// valoare din number1 == 10 && typeof number1 == typeof "10"
console.log(number1 === "10") // verifica valorile dar si tipul


// operatii pe string-uri 
// un string este format din mai mult caractere
var string1 = 'test';

console.log(string1 + "12") // test12

// Un string este vazut ca un array
var string1 = 'test';
console.log(string1[0]) // t
console.log(string1[1]) // e