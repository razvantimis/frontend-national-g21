// Composition
// O clasa are o prorietate care este alta clasa

// Exemplu: Un Car are un owner care este User
class User {
  constructor(name) {
    this.name = name;
  }
}

class Car {
  constructor(marca, user) {
    this.marca = marca;
    this.ownBy = user;
  }
}

const cosmin = new User('Cosmin');
const bmw = new Car('bmw', cosmin)

// Polymorphism

class Animal {
  run(){
    console.log('run animal')
  }
}

class Cat extends Animal {
   run(){
     console.log('cat slow run')
   }
}

class Dog extends Animal {
  run(){
    console.log('dog fast run')
  }
}
// Polymorphism - aici ne bazam ca avem doar pe interfata de la animale 
// Interfata de la clasa Animal => toate metodele si proprietatile care le are un obiect facut cu clasa Animal
const animals = [new Animal(), new Dog(), new Cat()]

for(const animal of animals){
  animal.run(); // apelam run fara sa stim ca defapt avem Cat, Dog etc
}