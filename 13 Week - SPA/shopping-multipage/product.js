// 1. Obtinem id din url ( query params )
const productID = location.search.substring(4); // "?id=".length
console.log(productID)

// 2. facem fetch la server dupa informatii

fetch(`https://fakestoreapi.com/products/${productID}`)
  .then(res => res.json())
  .then(productDetails => {
    console.log(productDetails)
    const itemDetails = document.querySelector('div')
    itemDetails.innerHTML = `
      <h2>Title :${productDetails.title}</h2>
      <img src="${productDetails.image}" style="width: 150px;" />  
    `
  })