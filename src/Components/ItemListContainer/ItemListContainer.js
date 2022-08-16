import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from "../../AsyncMock.js"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

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

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        // asyncFunction(categoryId).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })  
    }, [categoryId])

    if(loading) {
        return <h1>Loading products...</h1>
    }

    if(products.length === 0) {
        return categoryId ? <h1>Sorry! No products in this category! {categoryId}</h1> : <h1>Ups! No products available!</h1>
    }

    return (
        <>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer