// Function

// o functie ne ajuta sa grupam o bucata de cod sub un nume
// o functie ne ajuta sa refolosim codul

// definim functie
function dislayName(){
  // orice cod de js
  console.log('test')
}

// ca sa executam codul din functie, trebuie sa o apelam
dislayName()
dislayName()
dislayName()
dislayName()

//Cum facem asta in js? f(x) = x + 1

function f(x){ // x este un paramatru al functie f
  console.log('in interiorul lui f, x = ',x);

  return x + 1;
}
// valoare parametrului x este dat in momentul apelari lui f
console.log("functia f cand x = 1 va returna ",f(1)) // ne asteptam la 2


// conteaza ordinea parametrilor

function displayName(myStatus, name){
  if(myStatus === 'adult'){
    return 'Adult ' + name;
  } else if(myStatus === 'minor'){
    return 'Minor ' + name;
  }
}

console.log(displayName('adult', 'Cosmin')) // se va afisa Adult Cosmin
console.log(displayName('minor', 'Vasile')) // se va afisa Minor Vasile

dislayName('Cosmin', 'adult'); // apelam cu valori invers
// atunci parametrul myStatus = 'Cosmin' iar parametrul name = 'adult'