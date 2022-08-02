import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MercadoLibre from './Components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Quantity of added items', quantity)
  }

  const [page, setPage] = useState({ path: 'list', id: '1'})
  console.log(page)

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        {/*show ? <Counter show={show} /> : null */}
        {/*<Counter show={show} stock={7} initial={1} onAdd={handleOnAdd}/>*/}
        {/*<MercadoLibre /> */}
        <p>
          ¡Hey, planet!
        </p>


        <div>
          <button onClick={() => setPage({ path: 'list', id: '1'})}>List</button>
          {/* <button onClick={() => setPage({ path: 'detail', id: '1'})}>Detalle</button> */}
        </div>
        {page.path === 'list' ? <ItemListContainer greeting="Welcome to my eShop!" setPage={setPage}/> : null}
        {page.path === 'detail' ? <ItemDetailContainer page={page}/> : null}
        </div>

  );
}

export default App;