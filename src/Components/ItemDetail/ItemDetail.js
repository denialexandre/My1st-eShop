import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../Context/CartContext'
import NotificationContext from '../../Notification/Notificaction'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const quantityAdded = getProductQuantity(id)
    
    const handleOnAdd = (quantity) => {
        console.log('Items added to shopping cart:')
        console.log(quantity)
        setNotification('success', `You added: ${quantity} ${name}`)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }

    return (
        <article className="CardItem">
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
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Proceed to payment</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded}/>}
            </footer>
        </article>
    )
}

export default ItemDetail