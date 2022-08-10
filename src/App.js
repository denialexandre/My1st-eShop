import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Welcome to my eShop!" />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Products by category" />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;