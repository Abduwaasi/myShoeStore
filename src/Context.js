import React,{useState,useEffect,createContext, useContext} from "react"
import { commerce } from "./lib/commerce"

const AppContext = createContext()

const AppProvider =({children})=>{
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const fetchProducts = async ()=>{
        try {
            const {data} = await commerce.products.list()
            setProducts(data)  
        } catch (error) {
            console.log(error)
        }
       
    }
    const fetchCart = async ()=>{
    try {
        const response = await commerce.cart.retrieve()
        setCart(response)
        
    } catch (error) {
        console.log(error);
    }   
  
    }

    const handleAddToCart = async (productId,quantity)=>{
        const item = await commerce.cart.add(productId,quantity)
       setCart(item.cart)
    }

    const handleUpdateCartQty = async(lineItemId, quantity)=>{
        const response = await commerce.cart.update(lineItemId, {quantity})
        setCart(response.cart)
    }

    const handleRemoveCart = async (lineItemId)=>{
        const response = await commerce.cart.remove(lineItemId)
        setCart(response.cart)
    }
    const handleEmptyCart = async()=>{
        const response = await commerce.cart.empty()
         setCart(response.cart)
    }

    const refreshCart = async ()=>{
        const newCart = await commerce.cart.refresh() 
        setCart(newCart)
    }
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };

    useEffect(()=>{
     fetchProducts()
        fetchCart()
    },[])
 console.log(cart)
 console.log(cart.line_items)
//  console.log(cart.line_items.length)
  
  return  <AppContext.Provider value={{products,cart,handleAddToCart,handleUpdateCartQty,handleRemoveCart,handleEmptyCart,refreshCart,handleCaptureCheckout, order,errorMessage}}> {children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export default AppProvider