import React from 'react'
import CartComponent from "./CartComponent/CartComponent"
import { CartWrapper,CartFooter,Subtotal,ButtonGroup,Container } from './Cart.element'
import {Button} from "../../globalStyle"
import { useGlobalContext } from '../../Context'
import { Link } from 'react-router-dom'
const ReanderEmptyCart =()=>{

    return <h3>You do not have any item in the cart <br /> <br /> <Link>Click to add items to cart</Link></h3> 
}


const RenderCart = () => {
    const {cart,handleEmptyCart} = useGlobalContext()
       
     return   <>
        <CartWrapper>
            {cart.line_items&&cart.line_items.map((cartItem)=>{
                return <div key ={cartItem.id}>
                    <CartComponent cartItem={cartItem}/>
                </div>
            })}
        </CartWrapper>
            {cart.line_items&&
              <CartFooter>
              <Subtotal>Subtotal:{cart.subtotal.formatted_with_symbol}</Subtotal>
              <ButtonGroup>
                  <Button remove margin onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                  <Button as ={Link} to="/checkout">Checkout</Button>
              </ButtonGroup>
          </CartFooter>
            }
        
        </>
        }

const Cart = ()=>{
   const {cart} = useGlobalContext()
   return(
    <Container>
    <h2>Your Shopping Cart!</h2>
    {cart.line_items&&!cart.line_items.length ?<ReanderEmptyCart/>:<RenderCart/>}
    </Container>
   )

}
        

export default Cart
