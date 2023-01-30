import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// CSS imports 
import './Navbar.css';

// User imports 
import navbar_logo from './utils/amazon_logo.png';
import { useStateValue } from './StateProvider';

function Navbar() {
    const [{ basket }] = useStateValue();

    return (
        <nav className='navbar'>
            <Link to='/'>
                <img className='navbar__logo' src={navbar_logo} />
            </Link>

            <div className='navbar__search'>
                <input className='navbar__searchInput' type="search" />
                <SearchIcon className='navbar__searchIcon' />
            </div>

            <div className='navbar__nav'>
                <Link to='/login' className='navbar__link'>
                    <div className='navbar__option'>
                        <span className='navbar__option_line1'>Hello,</span>
                        <span className='navbar__option_line2'>Sign In</span>
                    </div>
                </Link>
                <Link to='/' className='navbar__link'>
                    <div className='navbar__option'>
                        <span className='navbar__option_line1'>Returns</span>
                        <span className='navbar__option_line2'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='navbar__link'>
                    <div className='navbar__option'>
                        <span className='navbar__option_line1'>Your</span>
                        <span className='navbar__option_line2'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='navbar__link'>
                    <div className='navbar__optionBasket'>
                        <ShoppingCartIcon />
                        <span className='navbar__option_line2 navbar__basketCount' >{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar