import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

    const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Loading products...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer