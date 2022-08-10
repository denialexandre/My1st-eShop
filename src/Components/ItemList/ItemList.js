import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products }) => {

    const handleClick = () => {
        console.log('Click on ItemList')
    }

    return(
        <div className='ListGroup' onClick={handleClick}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}
export default ItemList