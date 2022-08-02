import './Item.css'

const Item = ({id, name, img, price, setPage}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <button className='Option' onClick={() => setPage({ path: 'detail', id})}>Detail</button>
            </footer>
        </article>
    )
}

export default Item