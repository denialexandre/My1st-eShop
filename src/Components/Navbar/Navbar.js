import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className = 'Navbar'>
            <div className='Loguito'>Deni Alexandre's | eShop</div>
            <div className="Categories">
                <button className="Option">Apuntes de ITAM</button>
                <button className="Option">Consulting Services</button>
                <button className="Option">Miscelaneous</button>
            </div>
            <CartWidget />
        </nav>    
    )
}

export default Navbar