//Cum facem asta in js? f(x) = x + 1
// nu avem parametru x infara functie f

console.log("functia f cand x = 1 va returna ",f(5)) // ne asteptam la 6

console.log(f(10)) // 11
console.log(f(0)) // va fi afisat 1
console.log(f(450)) // f(450) = 450 +1

function f(x){ // x este un parametru al functie f
  console.log('in interiorul lui f, x = ',x);

  return x + 1;
}
// valoare parametrului x este dat in momentul apelari lui f


