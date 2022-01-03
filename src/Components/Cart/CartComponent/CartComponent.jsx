import React from 'react'
import {CartArticle,CartMedia,CartContent,TitleGroup,Title,Price,CartAction,CartButton,Quantity} from './CartComponent.element'
import {Button} from "../../../globalStyle"
import { useGlobalContext } from '../../../Context'

const CartComponent = ({cartItem}) => {
    const {handleUpdateCartQty,handleRemoveCart} = useGlobalContext()
    return (
        <CartArticle>
            <CartMedia>
               <img src={cartItem.media.source} alt={cartItem.name} />
            </CartMedia>
            <CartContent>
                <TitleGroup>
                    <Title>{cartItem.name}</Title>
                    <Price>{cartItem.price.formatted_with_symbol}</Price>
                </TitleGroup>
                <CartAction>
                 <div>
                    <CartButton onClick={()=>handleUpdateCartQty(cartItem.id, cartItem.quantity-1)}>-</CartButton>
                    <Quantity>{cartItem.quantity}</Quantity>
                    <CartButton onClick={()=>handleUpdateCartQty(cartItem.id,       cartItem.quantity+1)}>+ </CartButton>
                </div>
                    <Button remove small onClick={()=>handleRemoveCart(cartItem.id)}>Remove</Button>
                </CartAction>
            </CartContent>
        </CartArticle>
    )
}

export default CartComponent
