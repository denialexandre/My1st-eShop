import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className = 'Navbar'>
                <Link to='/'>Deni Alexandre's | eShop</Link>
            <div className="Categories">
                <Link to='/category/itam' className="Option">Apuntes de ITAM</Link>
                <Link to='/category/consulting' className="Option">Consulting Services</Link>
                <Link to='/category/miscelaneous' className="Option">Miscelaneous</Link>
            </div>
            <CartWidget />
        </nav>    
    )
}

export default Navbar