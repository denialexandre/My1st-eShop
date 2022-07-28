import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Quantity of added items', quantity)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/*show ? <Counter show={show} /> : null*/}
        <Counter show={show} stock={7} initial={1} onAdd={handleOnAdd}/>
        <p>
          ¡Hey, planet!
        </p>
        <ItemListContainer show={show} setShow={setShow} greeting="Welcome to my eShop!" />
      </header>
    </div>
  );
}

export default App;