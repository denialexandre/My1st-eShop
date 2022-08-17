import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
//import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'

    const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const values = response.data()

            const product = { id: response.id, ...values} 
            setProduct(product)
        }).catch(error => {
            console.log(error)        
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