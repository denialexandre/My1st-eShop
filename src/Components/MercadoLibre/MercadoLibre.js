import { useState, useEffect } from 'react'

    const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(res => setProducts(res.results))
    // }, [])

    const handleSearch = (e) => {
        console.log(e)
        e.preventDefault()
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                return response.json()
            })
            .then(res => setProducts(res.results))
    }
    
    // const handleKeyDown = (e) => {
    //     if(e.key === 'a') {
    //         e.preventDefault()
    //     }
    //     console.log(e.target.value)
    //     setInput(e.target.value)
    //     console.log(e)
    // }

    return (
            <>
            <h1>MercadoLibre</h1>
            <form onSubmit={handleSearch}>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    // onKeyDown={handleKeyDown}
                />
                <button type="submit">Buscar</button>
            </form>
            {products.map(prod => {
                return (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} alt={prod.title}/>
                    </div>
                )
            })}
        </>
    )
}

export default MercadoLibre