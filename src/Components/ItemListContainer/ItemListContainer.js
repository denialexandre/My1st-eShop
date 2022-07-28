import { useState, useEffect } from 'react'
import { getProducts } from "../../AsyncMock"

const ItemListContainer = ({ greeting, setShow, show }) => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    const productosTransformados = products.map(product => (
        <li>{product.name}</li>
    ))

    console.log(productosTransformados)

    return (
        <>
            <h1>{greeting}</h1>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
            <ul>
                {productosTransformados}
            </ul>
        </>        
    )
}

export default ItemListContainer