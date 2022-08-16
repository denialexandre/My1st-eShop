import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const { getQuantity, totalQuantity } = useContext(CartContext)

    //const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src="/Images/cart.svg" alt='ShoppingBag' className='CartImg'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget