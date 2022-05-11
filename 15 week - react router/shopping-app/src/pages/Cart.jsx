
function Cart(props) {
  const shopList = props.shopCart.map((item, index) => (
    <li>
      <h2>{item.title}</h2>
      <h3>Price: {item.price}</h3>
      <h4>Quantity:{item.quantity}</h4>
    </li>
  ))
  return (
    <div>
      <ul className="shop-list">
        {shopList}
      </ul>
    </div>
  )
}

export default Cart;