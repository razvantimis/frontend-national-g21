// La fiecare refresh de browser codul nostru se executa de la zero
// Adica nu isi pastreaza starea initiala

// Counter app
const button = document.getElementById("increment-btn");
const localStorageCounter = localStorage.getItem('counterLogin');
console.log('localStorageCounter', localStorageCounter)

let counter = 0;
if(localStorageCounter){ // prima data localStorageCounter este null
  counter = parseInt(localStorageCounter)
}

document.getElementById('counter-display').innerHTML = counter;

button.addEventListener("click", function () {
  counter = counter + 1;
  document.getElementById('counter-display').innerHTML = counter;


  localStorage.setItem('counterLogin', counter);

  if(counter > 25){
    // localStorage.clear()
    localStorage.removeItem('counterLogin')
  }
});




// Problema este ca counter nostru nu se persista la refresh

// Solutii:

// 1. Sa persistam starea aplicatie prin url din browser - solutiea asta este limitata
// adica putem persista doar chestii simple

// 2. local storage sau session storage
// Browser ne permite sa salvam valori persistente pe un domeniu ( un url de site )

// 3. Folosim cookies

// Local storage - nu expira valorile setate
// key este string
// value este tot string
localStorage.setItem('key1', 'value1')

const user = {
  name: 'Alex',
  age: 12,
}

localStorage.setItem('looginUser', JSON.stringify(user));

// Session storage - sunt sterge odata ce inchidem tab-ul/ pagina cu site-ul
// la fel ca local storage 

// sessionStorage.setItem('counterSession', "342")


// In local storage pastram password sau nu?
// Nu este recomandat, poate fi usor furata - cross site script