import React from 'react'
import {Products,Navbar} from "./Components"
import { useGlobalContext } from './Context'

const App = () => {
  
  return (
   <>
   <Navbar/>
   <Products/>
   </>
  )
}

export default App
