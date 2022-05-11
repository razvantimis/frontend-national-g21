import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import { useState } from 'react';

// const shopCartList = [
//   // { id: 1, title: 'IPhone 1', price: 342, quantity: 1 },
//   // { id: 2, title: 'IPhone 13', price: 34665, quantity: 10 },
// ]

function App() {
  const [shopCartList, setShopCartList] = useState([])
  function onAddShopCart(produs) {
    // console.log(produs);
    const newList = [...shopCartList];

    const existProduct = shopCartList.find(el => el.id === produs.id);
    if (existProduct == undefined) {
      // daca nu exista product in shopCart atunci facem push cu quanity:1
      produs.quantity = 1;

      newList.push(produs);
    } else {
      // daca exista atunci trebui sa crestem quanity
      existProduct.quantity += 1; // nu trebui sa facem push in array pentru ca avem referinta din array
    }

    console.log(newList)
    setShopCartList(newList);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={(
          <div>
            <Home onAddCart={onAddShopCart} />
          </div>
        )} />
        <Route path="cart" element={(
          <Cart shopCart={shopCartList} />
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
