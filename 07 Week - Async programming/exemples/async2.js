// Programarea asyncrona
// Javascript foloseste un singur thread pentru a executa codul
// Putem executa cu adevarat doua instructiuni in paralel? Nu
// Dar avem Non-blocking operation prin event loop

// setTimeout - executa o functie dupa un anumit timp dat de nou
// param1 - este un callback function
// param2 - dupa cat timp sa execute functia in milisecunde

console.log('1. cod sync')
setTimeout(function(){
  console.log('2. cod asyncron')
  console.log('cod se executa async')
}, 0)
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')
console.log('3. cod sync')

// sa executam un o functie doar dupa 1 secunda

setTimeout(function(){
   console.log('se executa dupa o secunda')
}, 1000) // 1000ms = 1s


// setInterval - tot repeta executia la un anumit interval
// executa functia in mod asyncron
setInterval(function(){
  console.log('se executa dupa fiecare 5 secunde')
}, 1000 * 5)

