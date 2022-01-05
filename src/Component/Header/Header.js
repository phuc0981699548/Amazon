import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Firebase/Firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue()
    
    const handleAuthentication = () => {
        if(user) {
            auth.signOut()
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header-logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </Link>
            <div className="header-search">
                <input type="text" className="header-input"/>
                <SearchIcon className="header-searchIcon" />
                
            </div>

            <div className="header-nav">
                <Link to={!user && "/login"} className="header-link">
                    <div onClick={handleAuthentication} className="header-option">
                        <span className="header-option1">Hello {!user ?'Guest' : user?.email}</span>
                        <span className="header-option2">{user ? "Log Out" : "Log In"}</span>

                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-option1" >Return</span>
                        <span className="header-option2" >& Order</span>

                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-option1" >Your</span>
                        <span className="header-option2" >Prime</span>

                    </div>
                </Link>

                <Link to="/checkout" className="header-link">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header-BasketCount">{basket?.length}</span>

                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
