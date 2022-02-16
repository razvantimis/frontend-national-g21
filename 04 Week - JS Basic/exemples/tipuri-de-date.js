// 2. Tipuri de date - 

// Primitive: string, number, boolean ( null => type object, undefined => type undefined ) - typeof

var string1 = 'sdasdas';
var number1 = 1;
var isMan = true;

// daca nu ii dam nici o valoare, atunci by default va fi initilizata cu undefined
// valoare undefined este folosita de javascript
var firstName;
// var firstName = undefined;

// null
// noi decidem ca acesta variabila are valoare null 
// trebuie dat explicit
var lastName = null;
// typeof null => object

console.log(typeof string1) // string
console.log(typeof number1) // number
console.log(typeof isMan) // boolean
console.log(typeof firstName) // undefined
console.log(typeof lastName) // lastName are valoare null si tipul object



