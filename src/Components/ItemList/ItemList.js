const ItemList = ({ products }) => {
    return (
        <ul>
            {products.map(product => (
            <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    )
}

export default ItemList