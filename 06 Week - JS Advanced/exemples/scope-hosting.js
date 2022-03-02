// Scope & hosting


var a = 30;

function main(){ // se va face hosting sus de tot in functie
  // nu acceseaza a din scopul global
  console.log("a=", a) // undefined
  // var a = 40;

  for(var a = 1; a<10; a++){ // var a din for are function scope
    console.log('main -----')
  } // a din for cand iese are valoare 10 ( 10<10 false => se opreste forul )
  // ce valoare are a ?
  console.log(a); // 40??  10?? - raspuns corect este 10
}