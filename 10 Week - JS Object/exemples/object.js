// Objects - Why OOP?
// Functional programming vs OOP - paradigma de programare
// OOP = Object-oriented programming

// Obiectele ne ajuta sa modelam viata reala in limbajul de programare
// Un obiect are caracteristici + functionalitate ca o definim prin metode
// OPP ne ajuta sa definim tip de objecte
const bottle = {
  // caracteristici
  volum: '2l',
  color: 'white',
  // functionalitate 
  drinkWater: function (userName) {
    console.log('vrem sa beau apa ', userName)
  }
}

// cum am putea sa facem 10 sticle? cu caracteristici diferite
// Functia createBottle va fa obiect de tip bottle de acelasi fel

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
const bottle2 = createBottle("2l", "black");
const bottle3 = createBottle("3l", "red");
const bottle4 = createBottle("4l", "white");

// Maria bea apa din sticla1
bottle1.drinkWater("Maria");

