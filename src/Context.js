import React,{useState,useEffect,useContext} from "react"
import { commerce } from "./lib/Commerce";
const AppContext = React.createContext();

export const AppProvider =({children})=>{
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const fetchProduct = async()=>{
        try {
            const response = await commerce.products.list()
            console.log(response)
            const {data} = response;
            setProducts(data)
        } catch (error) {
            console.log("There was an error in fetching the data ", error)
        }
    }
    const fetchCart = async()=>{
        setCart(await commerce.cart.retrieve())

    }
    const handleAddToCart= async (productId,quantity)=>{
        const item = await commerce.cart.add(productId,quantity)
        setCart(item.cart)
    }

    useEffect(() => {
        fetchProduct()
        fetchCart()
    }, [])
    console.log(products)
    return <AppContext.Provider value={{products,handleAddToCart}}> {children} </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

