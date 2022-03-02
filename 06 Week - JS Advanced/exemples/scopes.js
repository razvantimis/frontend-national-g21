// Ce este scope?
// O variabila/functie infara scopului ei, nu exista

// Pe ce avem scope?
// pe variabile, pe functii


// Scope local
function main(){ 
  // orice variabila/functie definite in coprtul functie au scop local
  // variabila studentName are scop local doar in functie
  // doar in functie putem accesa studentName
  var studentName = 'Alex'

  // este vizibila doar in functia main
  function show(){
    console.log('show name')

    // lexical scope
    // putem accesa orice din scopul glbal dar si din scopul local al functie main
  }

  show();
}

console.log(studentName); // ReferenceError: studentName is not defined

// Scope global
// orice declaratie de variabila/functie la nivelul fisierului are scop global
var firstName = 'Cosmin'
// window.firstName

// daca nu putem var , js va pune automat in locul nostru
// var lastName = 'R'
lastName = 'R'

// tot ce este global se pune pe window
function main2(){ // functia main2 are tot scop global
  // putem acesta in functie orice din scopul global
  console.log(firstName) // 'Cosmin'
  console.log(window.firstName) // 'Cosmin'

  // document are scop global
  console.log(document)
}


// Lexical scope
// Faptul ca putem acesa variabile/functie din scopurile de mai sus
