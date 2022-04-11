
// Au clasele hosting? NU!!
// Var si function au hosting

const car1 = new Car(); // Error: Cannot access 'Car' before initialization

// es6 sintex
class Car {
  run() {

  }
}

// Daca facem clasa in old way

const car2 = new Car();

// functia constructor
function Car(){ // aici avem hosting pentru ca este o functie
}

Car.prototype.run = function () {

}

