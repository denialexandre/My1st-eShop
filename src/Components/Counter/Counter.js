import { useState, useEffect } from 'react'

const Counter = ({ show, stock, initial, onAdd }) => {
    const [count, setCount] = useState (1)

    useEffect (() => {
        console.log('Function callback useEffect')

        return () => console.log('El componente se desmontará')
    }, [show])

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1 )
        }
    }
    console.log('Se renderizará')
    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}

export default Counter