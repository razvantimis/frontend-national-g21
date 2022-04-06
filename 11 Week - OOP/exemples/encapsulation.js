// OOP - Encapsulation
// Ascundem anumite informatii/detali de implementare 
// Cine ascunde? obiectul facut cu o clasa
// De cine le ascunde? de restul codului

// Metodele/proprietatile clasei pot fi public/private
// Public inseamna ca pot fi accesate din afara clasei
// Exemplu: car1.moveLeft(); => moveLeft este metoda publica
// Private inseamna ca nu pot fi accesate din afara clasei
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// Exemplu: car1.#getLeftPosition() ==> nu poate fi accesat infara clasei

// Exemplu - workshop car
// Clasa Car ascunde de restul codului:
// 1. ca foloseste un html img ca sa reprezinte o masina
// 2. pentru a misca masina foloseste css

// Avantajul este ca putem schimba detalii fara sa afectam restul codului

class Car {
  #carElement;

  constructor() {
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    carImg.style.position = 'relative';
    carImg.style.top = '0';
    carImg.style.left = '0';

    // inaite de # se folosea _ ca si conventie
    // _ este o conventia intre programatori, care ne spune ca acesta proprietate a clasei este privata
    this._stopCar = true;

    this.#carElement = carImg;
    document.body.appendChild(carImg);
  }

  #getLeftPosition() {
    // ascundem fata de restul codului
    const oldLeft = parseInt(this.carElement.style.left);
    return oldLeft;
  }

  moveLeft() {
    const oldLeft = this.#getLeftPosition(); // putem apela getLeftPosition doar in interiorul clasei
    this.#carElement.style.left = oldLeft - 10 + 'px';
  }

}


const car1 = new Car()
// car1.moveLeft();
// carElement nu putem accesa in exterior
// console.log(car1.#carElement) // na va da erroare
// car1.#getLeftPosition(); // la fel erroare


// getter / setter
// oferim acces la color dar controlat de noi
class Vehicle {
  #color;

  // Getter
  getColor() {
    return this.#color;
  }

  // Setter
  setColor(newColor) { // putem pune validari
    this.#color = newColor;
  }
}