import React from 'react'
import logo from '../Media/amazonlogo.png'
import './Styles/Header.css'
import { Link } from 'react-router-dom'
import { Router } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase'


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut(); 
        }
    }

    return (
        <nav className="header">
        {/* // The amazon logo */}
        <Link to="/home">
        <img className = "header__logo" 
        src = {logo}
        alt="amazonlogo" />
        </Link>
        
        {/* // The search Box  */}
        <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>
        {/* // three links */}
        <div className="header__nav">
            {/* link one  */}
            <Link to={!user && '/login'}  className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__linktext">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__linktextLower">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
      
            {/* link two   */}
            <Link to="/" className="header__link">
            <div className="header__options">
                <span className="header__linktext" >
                    Returns
                </span>
                <span className="header__linktextLower">
                   & orders
                </span>
            </div>
            </Link>
            {/* link three  */}
            <Link to="/" className="header__link">
            <div className="header__options">
                <span className="header__linktext" >
                    Your
                </span>
                <span className="header__linktextLower">
                    Prime
                </span>
            </div>
            </Link>
{/* // basket with the item number */}
            <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__linktextLower header__basketCount">{basket?.length}
                </span>
            </div>
            </Link>
        </div>
        


        </nav> 
    )
}

export default Header
