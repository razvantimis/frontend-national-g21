// OOP - Inheritance

// Mostenirea se face intre clase
// Se mosteneste functionalitatea + caracteristicile de la o clasa
// Clasa care mosteneste poate sa adauge functionalitate extra

// Mostenirea functionalitati se face prin prototype
// Proptotype chain - in momentul in care apelam o metoda
// De exemplu meat1.eat(); => javascriptul va cautam metoda eat in:
// 1. prototype-ul de la clasa Meat, daca nu gaseste metoda eat
// 2. cauta in prototype-ul de la clasa Food, daca nu gaseste
// 3. cauta in prototype-ul de la Object, daca nu gaseste
// 4. primi erroare

// Folosin extends din es6 pentru a mosteni

// Exemplu
class Food {
  constructor(color) {
    this.color = color;
  }

  toString() {
    return 'toString din Food'
  }

  eat() {
    console.log('eat this food', this)
  }
}

// super se refera la clasa din care mostenim
// Putem apelam constructorul de la clasa de unde mostenim

class Pizza extends Food {
  constructor(color, greutate) {
    super(color); // apelam constructorul de la clasa Food
    this.greutate = greutate;
  }

  toString() {
    const foodToString = super.toString(); // apelam toString de la clasa Food
    return foodToString + '  --- toString din Pizza'
  }

  fastEat() {

  }
}

class Meat extends Food {

  slowEat() {

  }

}

const pizza1 = new Pizza('red', '2kg');
console.log(pizza1);
// pizza1.eat();
console.log(pizza1.toString());
const meat1 = new Meat('black');
// meat1.eat();

console.log(meat1.toString());

