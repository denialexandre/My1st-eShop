import './App.css';
//import { useState, createContext } from 'react'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'
import { NotificationProvider } from './Notification/Notificaction'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Welcome to my eShop!" />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Products by category: " />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />}/>
                <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}
export default App;