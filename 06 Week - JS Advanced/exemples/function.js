// 2. Expression function / anonymous function - callback

// Expression function

var result = 1 + 2 // expresie aritmetic
var result2 = 'Mr' + ' ' + 'Alex' // concatenare de strings

// Functile in javascript sunt defapt object
// Avem o referinta catre functie
var resultFunc = function (){
  console.log('Eu sunt expression function')
}

resultFunc();

// Poate primul parametru fi o functie?
// Parametru care are o functie este callback
// Cedam controlul legat de apelarea functie
function show(resultFn){
   resultFn();
}

show(resultFunc)


var resultFunc = function (){
  console.log('Eu sunt expression function')
}
var resultFunc2 = function (){
  console.log('Eu sunt expression function')
}
console.log(resultFunc === resultFunc2) // va fi false, au reference diferite

// Events din dom, acolo folosim callback
var handleBrowserScroll = function(){
  console.log('daca se face scroll')
}
document.addEventListener('scroll', handleBrowserScroll)

// anonymous function

(function(){
  console.log('nu ma poate apela nimeni')
})()

// Sa ascundem informatii