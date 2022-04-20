import './style.css'
import { getProducts, createProductListHtml } from './src/product';

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
  cartPage.innerHTML = `
    Aici o sa fie Cart Page
  `
  appHtml.appendChild(cartPage);

}
const appHtml = document.querySelector('#app');
const linkCart = document.querySelector('#cart');
const linkHome = document.querySelector('#home');

let pageClick = 0;

linkCart.addEventListener('click', () => {
  appHtml.innerHTML = "";
  createShopCartPage(appHtml);
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