// # Shop list

// 1. Definiam o lista de cumparaturi
// 2. Vom calcula suma totala de plata

// am folosit un obiect ca sa model un produs 
var produs1 = {
  pret: 25,
  cantitate: 2,
  name: "Paine",
}

var produs2 = {
  pret: 17,
  cantitate: 1,
  name: "Ciocolata",
}

var produs3 = {
  pret: 45,
  cantitate: 5,
  name: "Apa",
}

var shopList = [produs1, produs2, produs3, { pret: 5, cantitate: 1, name: "Paine integrala" }]
// push adauga la finalul listei elementul dat
shopList.push({ pret: 10, cantitate: 2, name: "Mere" });

var produs4 = {
  pret: 3,
  cantitate: 15,
  name: "Biscuiti",
}
shopList.push(produs4)

var toPay = 0;

// Vom calcula suma totala de plata
for (var i = 0; i < shopList.length; i++) {
  var produs = shopList[i];
  var totalPricePerProdus = produs.pret * produs.cantitate;

  toPay = toPay + totalPricePerProdus;

}

console.log('Total de plata = ', toPay, ' lei')


// return opresete executia functie
function getTotalPrice(list) {
  var toPay = 0;
  for (var i = 0; i < list.length; i++) {
    var produs = list[i];
    var totalprice = produs.pret * produs.cantitate;
    toPay = toPay + totalprice;

  }
  return toPay;
}

console.log(getTotalPrice(shopList))


var shopList2 = []
shopList2.push({ pret: 31, cantitate: 1, name: "Paine integrala" })
shopList2.push({ pret: 34, cantitate: 3, name: "Bere" })

console.log('Total de plata shopList2 = ', getTotalPrice(shopList2))
















































