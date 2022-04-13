// console.log(this) // this === window
console.log(window);

// Tot ce este global in browser se pune in window
var firstName = 'Tim';
console.log(firstName);
console.log(window.firstName);

// setInterval o functie globala in browser
// window.setInterval(); or setInterval()
// window.document or document

window.parseInt = function () { // hacking , am inlocuim parseInt
  return 1;
}

// Window Screen Properties
// ne ajuta sa facem design custom in functie de ecranul utilizatorului, din js
console.log(window.screen)
console.log(screen);