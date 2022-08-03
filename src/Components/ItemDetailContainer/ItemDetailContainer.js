import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

    return(
        <div className='ItemDetailContainer'>
            {/* React.createElement(ItemDetail, {...product}) */}
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer