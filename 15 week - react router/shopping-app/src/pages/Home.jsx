import { useState, useEffect } from 'react';

async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json();
  return products;
}

function Product(props) {

  return (
    <div className='product'>
      <h2>{props.title}</h2>
      <h3>{props.price}$</h3>
      <button>Add</button>
    </div>
  )
}

function Home() {
  const [products, setProducts] = useState([
  ])

  useEffect(() => {
    getProducts().then((produse) => {
      setProducts(produse)
    })
  }, [])

  return (<div className='products'>
    {products.map(product => (
      <Product title={product.title} price={product.price} />
    ))}
  </div>)
}



export default Home;