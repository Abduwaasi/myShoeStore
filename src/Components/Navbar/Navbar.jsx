import React from 'react'
import logo from "../../Assets/commerce.png"
import {RiShoppingCart2Fill} from "react-icons/ri"
import {AppBar,NavbarLogo,NavbarLogoImg,NavbarLogoText,CartButton,CartIcon,Badge} from "./Navbar.elements"
import {Link} from "react-router-dom"
import { useGlobalContext } from '../../Context'
const Navbar = () => {
    const {cart} =useGlobalContext()
    const {total_items} = cart
    return (
        <AppBar>
           <NavbarLogo as={Link} to="/">
               <NavbarLogoImg>
                   <img src={logo} alt="shoe store logo" />
               </NavbarLogoImg>
               <NavbarLogoText>shoe store</NavbarLogoText>
          </NavbarLogo> 
          <CartButton as={Link} to="/cart">
              <CartIcon>
                  <RiShoppingCart2Fill size="2rem" color="#212121"/>
             </CartIcon>
                  <Badge>{total_items}</Badge>
          </CartButton>
        </AppBar>
    )
}

export default Navbar
