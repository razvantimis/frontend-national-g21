import './product.css';

export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json();
  return products;
}

export const shopCart = [
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

export function createProductListHtml(listOfProducts) {
  const productContainer = document.createElement('div')
  productContainer.classList.add('products')
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
  return productContainer;
}

