async function getProducts() {
  // v1
  // return fetch('https://fakestoreapi.com/products')
  //   .then(res => {
  //     return res.json()
  //   })
  // v2
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json();
  return products;
}



getProducts().then(products => {
  console.log(products);
  createProductListHtml(products)
})

function createProductListHtml(listOfProducts) {
  const productContainer = document.querySelector('.products')
  for (let i = 0; i < listOfProducts.length; i++) {
    const productValue = listOfProducts[i]

    const productHtml = document.createElement("div");
    productHtml.classList.add('product')
    productHtml.innerHTML = `
        <h2>${productValue.title}</h2>
        <h3>Price: ${productValue.price}</h3>
        `
    productContainer.appendChild(productHtml);
  }
}
// const list = [{ title: 'Phone', price: 342 }, { title: 'Phone', price: 342 }, { title: 'Phone', price: 342 }]
// createProductListHtml(list)