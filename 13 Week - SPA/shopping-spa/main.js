import './style.css'
import { createProductListHtml, shopCart } from './src/product';


function createHomePage(appHtml) {
  const homePage = document.createElement('div');
  // getProducts().then(products => {
  //   const productContainer = createProductListHtml(products)

  //   document.querySelector('#app').appendChild(productContainer)
  // })

  const list = [
    { id: 1, title: 'Phone 1', price: 342 },
    { id: 2, title: 'Phone 2', price: 342 },
    { id: 3, title: 'Phone 3', price: 342 }
  ]
  const productContainer = createProductListHtml(list)
  homePage.appendChild(productContainer)


  appHtml.appendChild(homePage);
}

function createShopCartPage(appHtml) {
  const cartPage = document.createElement('div');
 
  // 2. Partea de display a lor
  for(let i=0; i<shopCart.length; i++) {
    const cartItem = document.createElement('div')
    const shopItem = shopCart[i];
    cartItem.innerHTML = `<h2>Title: ${shopItem.title} Price: ${shopItem.price}$ Quantity: ${shopItem.quantity}</h2>`    

    cartPage.appendChild(cartItem);
  }

  appHtml.appendChild(cartPage);

  // 1. Partea de date - adica ce se adauga in cart ??
}
const appHtml = document.querySelector('#app');
const linkCart = document.querySelector('#cart');
const linkHome = document.querySelector('#home');

let pageClick = 0;

linkCart.addEventListener('click', () => {
  appHtml.innerHTML = ""; // stergem tot din app
  createShopCartPage(appHtml); // refacem pagina in div app
  pageClick++;
  console.log(pageClick);

})

linkHome.addEventListener('click', () => {
  appHtml.innerHTML = "";
  createHomePage(appHtml);
  pageClick++;
  console.log(pageClick);
})


// createHomePage(appHtml);
createShopCartPage(appHtml);