/// Class - function constructor vs es6

// Factory function
function createBottle(bottleVolume, bottleColor) {
  return {
    // caracteristici
    volum: bottleVolume,
    color: bottleColor,
    // functionalitate 
    drinkWater: function (userName) {
      console.log('vrem sa beau apa ', userName)
    }
  }
}

const bottle1 = createBottle("1l", "yellow");
// ------------- Class -------------------
// Elemente noi, avem new, this, prototype
// Conventia de nume pentru clase este PascalCase
// Ce este o clasa? aduc avantajele OOP - mostenire
// 1. o clasa in javascript este o functie
// 2. este o forma care ne ajuta sa facem obiecte de acelasi tip

// Ce este this?
// This se refera la contextul de executie al functiei
// 1. this la nivel global este window
// 2. function TestClass(){ console.log(this) } 
// daca aplem TestClass() ( fara new ) atunci this va fi tot window
// 3. Daca folosim new TestClass() atunci this va fi un obiect gol , {} - un nou obiect
// new forteaza this sa fie acest object gol + returneaza objectul nou
// This se foloseste in combinatie cu "new"

// Avem o clasa facuta cu "Function constructor"
// O functie devine "Function constructor" daca facem "new" de functie

function Bottle(bottleVolume, bottleColor) {
  /// Functie constructor
  // codul de aici se apeleaza cand creem prima data objectul
  // Deobicei se pun doar caracteristicile obiectului
  this.volum = bottleVolume;
  this.color = bottleColor;
  // Legat de this
  // this este bottle2 cand se ruleaza const bottle2 = new Bottle('2l', 'red') 
  // cand rulam "const bottle3 = new Bottle('3l', 'black');" , atunci this va fi bottle3
}
// prototype ne ajuta la mostenirea intre clase

Bottle.prototype.drinkWater = function (userName) {
  console.log('vrem sa beau apa ', userName)
  console.log(this); // bootle2 sau bottle3 - depinde de pe ce obiect se apeleaza drinkWater
}

const bottle2 = new Bottle('2l', 'red')
const bottle3 = new Bottle('3l', 'black');
console.log(bottle2.drinkWater('razvan')) // this din metoda drinkWater va fi bottle2
console.log(bottle3.drinkWater('marian')) // this din metoda drinkWater va fi bottle3


// exemplu obiect gol
const obj1 = {}
obj1.volumn = '2l'
obj1.color = 'red'

//es6 class - sugar sintex
class Bottle {
  constructor(bottleVolume, bottleColor) {
    // se apeleaza cand facem new Bottle()
    this.volum = bottleVolume;
    this.color = bottleColor;
  }

  drinkWater() {
    console.log('vrem sa beau apa ', userName)
    console.log(this);
  }

  sayHi() {

  }
}

const bottle4 = new Bottle('15l', 'yellow')
