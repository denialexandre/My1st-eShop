import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    //const { cart, clearCart, getTotal, getQuantity, totalQuantity, total } = useContext(CartContext) 
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)  


    //const totalQuantity = getQuantity()
    //const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>Your shopping cart is empty!</h1>
        )
    }

    return (     
        <div>
            <h1>Your shopping cart!</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total} USD</h3>
            <button onClick={() => clearCart()} className="Button">Empty cart</button>
            <Link to='/checkout' className='Button'>Continue to check out!</Link>
        </div>
    )
}

export default Cart