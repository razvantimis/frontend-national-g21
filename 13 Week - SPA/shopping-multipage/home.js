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
  createProductListHtml(products)
})

// Cum arata un cos de produse?
const shopCart = [
  // { id: 1, title: 'Phone 1', price: 342, quantity: 1 }
]

function addProductToCart(product) {
  const existProduct = shopCart.find(el => el.id === product.id);
  if (existProduct == undefined) {
    // daca nu exista product in shopCart atunci facem push cu quanity:1
    product.quantity = 1;
    shopCart.push(product);
  } else {
    // daca exista atunci trebui sa crestem quanity
    existProduct.quantity += 1; // nu trebui sa facem push in array pentru ca avem referinta din array
  }

  console.log(shopCart)

}

function createProductListHtml(listOfProducts) {
  const productContainer = document.querySelector('.products')
  for (let i = 0; i < listOfProducts.length; i++) {
    const productValue = listOfProducts[i]

    const productHtml = document.createElement("div");
    productHtml.classList.add('product')
    productHtml.innerHTML = `
        <h2>${productValue.title}</h2>
        <h3>Price: ${productValue.price} $</h3>
        `
    productContainer.appendChild(productHtml);

    const button = document.createElement("button");
    button.innerText = "Add to cart";
    productHtml.appendChild(button);
    button.onclick = function () {
      addProductToCart(productValue)
    }

  }
}
// const list = [
//   { id: 1, title: 'Phone 1', price: 342 },
//   { id: 2, title: 'Phone 2', price: 342 },
//   { id: 3, title: 'Phone 3', price: 342 }
// ]
// createProductListHtml(list)