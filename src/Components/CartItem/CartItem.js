import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Quantity: {quantity}
                </p>
                <p className="InfoCartItem">
                    Price: ${price} USD
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                <p className="InfoCartItem">
                    Subtotal: ${price * quantity} USD
                </p>
                <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Delete</button>
            </footer>
        </article>
    )
}

export default CartItem