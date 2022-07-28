import { useState, useEffect } from 'react'
import { getProducts } from "../../AsyncMock"

const ItemListContainer = ({ greeting, setShow, show }) => {
    const [products, setProducts] = useState ([])
    const [loader, setLoader] = useState (true)

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log (error)
        }).finally (() => {
            setLoader(false)
        })
    }, [])

    //const productosTransformados = products.map(product => (
    //    <li>{product.name}</li>
    //))

    //console.log(productosTransformados)

if (loader) {
    return <h1>Loading products...</h1>
}

    return (
        <>
            <h1>{greeting}</h1>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
        </>        
    )
}

export default ItemListContainer