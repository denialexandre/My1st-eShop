import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (quantity) => {
        console.log('Added items to shopping cart: ', quantity)
        setQuantity(quantity)
    }

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Chance to item counter
            </button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Category: {category}
                </p>
                <p className="Info">
                    Description: {description}
                </p>
                <p className="Info">
                    Price: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {/* { inputType === 'button' ? <ButtonCount stock={stock} onConfirm={handleOnAdd}/> : null}
                { inputType === 'input' ? <InputCount stock={stock} onConfirm={handleOnAdd}/> : null} */}
                { quantity > 0 ? <Link to='/cart'>Go to shopping cart!</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd} />}
            </footer>
        </article>
    )
}
export default ItemDetail