// 0. Value by reference ( == exemple)

// In alte limbaje avem pointer ( este un numar 452721234 )

// Reference este o adresa spre o locatie de memorie ( memoria ram )
// In cazul js , apare cand declaram array sau obiecte

var age = 17;
var age2 = 17;

// comparatie valorilor
console.log(age === age2) // 17 == 17 => true

// Cand avem array sau obiect in variabila nostra se pune  o referinta spre array
var listAge = [17]
var listAge2 = [17]
// comparatie referintelor
console.log(listAge == listAge2)  // => false , deoarece adresele de memorie difera 
console.log(listAge === listAge2)  // => false , daca avem === se verifica si typeof listAge == typeof listAge2
// la compararea de valori va compara referinta


// Exemple 100gb date
var studentsRO = [{ name: 'Razvan', intCode: 'RO01' }] // toti studenti din ro
var studentsUS = [{ name: 'Andreea', intCode: 'US02' }] // toti studenti din us

// daca vrem sa verificam ca sunt egala, facem noi comparare manual
console.log(studentsRO === studentsUS) // compara doar adresa de memorie / referinta


// 1. Function - Paramater by reference / by value
// Toata tipuri primitive, adica number|string|boolean|null|undefined se trimit prin valoare
// Adica se face o copie in parametru
// Array si object se trimit prin reference - se trimite adresa unde se afla

// parametru name - va primi o copie a valori 'Razvan'
// parametru students - va primi referinta de la studentsRO
// -  daca ar primi o copia a valorilor din studentsRO atunci am ramane fara memorie ram
// Daca am trimit array prin copie sar dubla spatiu pentru array nostru
function searchStudent(name, students) {
  name = 'Alex' // afectam copia lui studentName, nu afectam studentName din afara

  console.log(students[0])
  students[0] = 10; // va schimba array si infara functie deoarece avem referinta
}

// 100gb de date
var studentsRO = [{ name: 'Razvan', intCode: 'RO01' }] // toti studenti din ro
var studentName = 'Razvan'
searchStudent(studentName, studentsRO);

console.log(studentName); // valoare va fi 'Razvan'
console.log(studentsRO); // [10]


// Object

// parametru myStudent se trimite prin reference
function exempleReferenceObject(myStudent) {
  console.log(myStudent)

  // adaugam o nou pririetate pe object
  myStudent.age = 30
}

var student = {
  name: 'Alex',
  country: 'RO'
}
exempleReferenceObject(student)

console.log(student); // va apare aici age: 30 ??


// Old way - cea mai recomandata de folosit
var produs4 = {
  pret: 3,
  cantitate: 15,
  name: "Biscuiti",
}
// Este o functie pura - nu are side effects
function getProductTotalToPay(produs){
  console.log(produs)
  var total = produs.pret * produs.cantitate;
  return total;
}

produs4.total = getProductTotalToPay(produs4);


// New way - nu recomand folosirea acestei metode
var produs4 = {
  pret: 3,
  cantitate: 15,
  name: "Biscuiti",
}
// Cum putem scoate o valoare din functie fara sa folosim return?
function getProductTotalToPay(produs) {
  console.log(produs)
  var total = produs.pret * produs.cantitate;

  produs.total = total; // va fi vizit in exteriorul functie
  // este un side effects al functie 
}


var total = getProductTotalToPay(produs4)
console.log(total) // functia nu mai returneaza nimic, total = undefined
console.log(produs4.total)




