// Metode statice

// Exemplu metoda 
class Car {

  run(){
    // avem acces la this

  }
}

const car1 = new Car();
car1.run(); // this din run va fi car1
// ....
const car21 = new Car();
car21.run(); // this din run va fi car21

// Metodele statice
// O metoda statica este ca o functie normala doar ca in Clasa
// Daca folosim metoda statica, nu mai este nevoie sa facem un obiect cu clasa Car
// putem apela direct
class Car {
  static create(){
     // nu avem acces la this
  }
}

Car.create()

// este tot una cu 
function createCar(){
  // nu avem this
}

createCar();