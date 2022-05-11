import { useState, useEffect } from 'react';

async function getProducts() {
  // const response = await fetch('https://fakestoreapi.com/products')
  // const products = await response.json();
  // return products;
  return [
    {
      title: 'Title 1 produs',
      price: 134,
      id: 1,
    },
    {
      title: 'Title 2 produs',
      price: 342,
      id: 2,
    },
    {
      title: 'Title 1 produs',
      price: 134,
      id: 3,
    },
    {
      title: 'Title 2 produs',
      price: 342,
      id: 4,
    },
    {
      title: 'Title 1 produs',
      price: 134,
      id: 5,
    },
    {
      title: 'Title 2 produs',
      price: 342,
      id: 6,
    }
  ]
}

function Product(props) {
  return (
    <div className='product'>
      <h2>{props.title}</h2>
      <h3>{props.price}$</h3>
      <button onClick={props.onClickProduct}>Add</button>
    </div>
  )
}

function Home(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((produse) => {
      setProducts(produse)
    })
  }, []);

  const arrayOfProductCmps = products.map((product, index) => (
    <Product
      key={index}
      title={product.title}
      price={product.price}
      onClickProduct={(event) => {
        props.onAddCart(product)
      }}
    />
  ));

  return (
    <div className='products'>
      {arrayOfProductCmps}
    </div>
  )
}



export default Home;