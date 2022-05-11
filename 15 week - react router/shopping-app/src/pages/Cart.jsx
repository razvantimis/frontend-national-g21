
const shopCart = [
  { id: 1, title: 'IPhone 1', price: 342, quantity: 1 },
  { id: 2, title: 'IPhone 13', price: 34665, quantity: 10 },
]

function Cart() {
  const shopList = shopCart.map((item, index) => (
    <li>
      <h2>{item.title}</h2>
      <h3>Price: {item.price}</h3>
      <h4>Quantity:{item.quantity}</h4>
    </li>
  ))
  return (
    <div>
      <ul class="shop-list">
        {shopList}
      </ul>
    </div>
  )
}

export default Cart;