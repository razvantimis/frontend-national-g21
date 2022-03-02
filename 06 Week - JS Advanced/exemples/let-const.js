// let/const este sintaxa de es6 - 2015

// nu mai avem hosting deloc pe let/const

// ReferenceError: firstName is not defined
console.log(firstName) // nu pot accesa firstName inaite

let firstName = 'Cosmin' // nu mai are hosting


// Scopul pentru let/const

// Let/const au block scope
// ReferenceError: age is not defined
{ let age =  12; } // un block 
console.log(age); // nu avem acces la variabila age


let a = 30;

function main(){ 
  //console.log("a=", a) 
  // ReferenceError: Cannot access 'a' before initialization
  let a = 40;

  for(a = 1; a<10; a++){ // 
    console.log('main -----')
    let b = 10; // ramane doar in for
    if(a === 2){
      let b = 12; // este doar in scopul if-lui adica {}
    }
    console.log(b) // b = 10
  } // putem accesa din for inafara lui? NU
  // ce valoare are a ?
  console.log(a); // 40
}

// let vs const

//1. nu putem declara o variabila cu const fara sa o initializam
const firstName; // nu merge //  Missing initializer in const declaration

const firstName = 'Alex'

//2. nu ne lasam sa schimb valoare din variabila creata deja 
firstName = 'Cosmin' // nu merge / Assignment to constant variable.

// Cu let putem sa facem 1 si 2


// cu let/const nu putem defini de mai mult ori aceias variabila

var firstName = 'Cosmin'
var firstName = 'Cosmin'
var firstName = 'Cosmin'
var firstName = 'Cosmin'


// vs
let firstName = 'Cosmin'
//  SyntaxError: Identifier 'firstName' has already been declared
let firstName = 'Cosmin'
let firstName = 'Cosmin'
let firstName = 'Cosmin'