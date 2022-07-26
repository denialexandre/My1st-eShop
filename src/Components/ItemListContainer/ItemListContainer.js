const ItemListContainer = ({ greeting, setShow, show }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
        </>
    )
}

export default ItemListContainer