import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity, totalQuantity, total } = useContext(CartContext)  

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
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Empty cart</button>
            <button className="Button">Continue to check out</button>

        </div>
    )
}

export default Cart