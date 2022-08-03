import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../AsyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])
    const [loader, setLoader] = useState (true)
    const params = useParams ()

    useEffect (() => {
        if(params.categoryId) {
            getProductsByCategory(params.categoryId).then(response => {
                setProducts (response)
            }).catch(error => {
                console.log(error)
            }).finally (() => {
                setLoader(false)
            })
        } else {
            getProducts().then(response => {
                setProducts (response)
            }).catch(error => {
                console.log(error)
            }).finally (() => {
                setLoader(false)
            })
        }
    }, [params.categoryId])

    if (loader) {
        return <h1>Loading products...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
            {/*<button onClick={() => setShow(!show)}>Show/Hide</button>*/}
        </>        
    )
}

export default ItemListContainer