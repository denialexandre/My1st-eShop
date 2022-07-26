import './ItemListContainer.css'
import { useState, useEffect } from 'react'
//import { getProducts, getProductsByCategory } from "../../AsyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [title, setTitle] = useState('Take a look around...')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            const values = doc.data()
            return { id: doc.id, ...values}
        })
        setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Buy something!')
        }, 5000)
    }, [])

    if(loading) {
        return <h1>Searching products...</h1>
    }

    if(products.length === 0) {
        return categoryId ? <h1>Ups! There are no more available products for this category: {categoryId}</h1> : <h1>Sorry! No more products available!</h1>
    }

    return (
        <>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer