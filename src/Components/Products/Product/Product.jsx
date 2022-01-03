import React from 'react'
import { SingleProduct,ProductImg,ProductFooter, TitleContainer,Description,AddToCart,CardAction } from './Product.element'
import {BsCartPlusFill} from "react-icons/bs"
import { useGlobalContext } from '../../../Context'


const Product = ({product}) => {
    const {handleAddToCart} = useGlobalContext()
   
    return (
        <SingleProduct>
            <ProductImg>
                <img src={product.media.source} alt={product.name} />
            </ProductImg>

            <ProductFooter>
                <TitleContainer>
                    <h3>{product.name}</h3>
                    <h3>{product.price.formatted}</h3>
                </TitleContainer>
                <Description dangerouslySetInnerHTML={{__html:product.description}}/>
                <CardAction>
                <AddToCart aria-label="handle add to cart" onClick={()=>handleAddToCart(product.id,1)}>
                  <BsCartPlusFill size="1.2rem"/>
                </AddToCart>
                </CardAction>
            </ProductFooter>
        </SingleProduct>
    )
}

export default Product
