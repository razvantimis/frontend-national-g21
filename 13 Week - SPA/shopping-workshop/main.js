import './style.css'
import { getProducts, createProductListHtml } from './src/product';

function showProductList() {
  getProducts().then(products => {
    const productContainer = createProductListHtml(products)

    document.querySelector('#app').appendChild(productContainer)
  })
}

showProductList();