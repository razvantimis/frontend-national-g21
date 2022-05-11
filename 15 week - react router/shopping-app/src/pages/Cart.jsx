
const shopCart = [
  { id: 1, title: 'Phone 1', price: 342, quantity: 1 },
  { id: 2, title: 'Phone 13', price: 34665, quantity: 10 },
]

function Cart() {
  return (
    <div>
      <ul class="shop-list">
        <li>
          <h2>Title:'IPhone 1'</h2>
          <h3>Price: 342</h3>
          <h4>Quantity:1</h4>
        </li>
        <li>
          <h2>Title:'IPhone 1'</h2>
          <h3>Price: 342</h3>
          <h4>Quantity:1</h4>
        </li>
      </ul>
    </div>
  )
  
}

export default Cart;