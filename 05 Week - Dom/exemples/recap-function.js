// Functie
// daca avem un param cu numele "_"  => nu este folosit
// Header - nume functie + parametri
function showData(a, b) {
  // Body - codul care il executa functia

}

// Daca apelam functia fara valori pentru a si b
// atunci a si b vor fi undefined
showData(); // a = undefined si b = undefined


showData("curs") // a = "curs" si b = undefined

showData(null, "curs") // a = null si b = "curs"


// Cum putem scoate valori din functie?
// folosim return
// O functie fara return ce returneaza? undefined
function sum(a, b) {
  return a + b;
}

var total = sum(1, 2); // a = 1, b = 2
console.log(total);