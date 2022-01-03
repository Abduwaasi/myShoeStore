import React from 'react'
import { useGlobalContext } from '../../Context'
import Product from './Product/Product'
import { ProductContainer } from './Products.element'

const Products = () => {
    const {products} = useGlobalContext()
    return (
        <ProductContainer>
           {products.map((product)=>{

               return <div key= {product.id}>
                   <Product product={product}/>
               </div>
           })} 
        </ProductContainer>
    )
}

export default Products
