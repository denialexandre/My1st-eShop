import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="Navbar" >
            <Link to='/' className='Loguito'>Deni Alexandre's | eShop</Link>
            <div className="Categories">
                <NavLink to='/category/ITAM' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Apuntes de ITAM</NavLink>
                <NavLink to='/category/Consulting' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Consulting Services</NavLink>
                <NavLink to='/category/Miscelaneous' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Miscelaneous</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar