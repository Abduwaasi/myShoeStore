import React from "react"
import { Typography,List, ListItem, ListItemText } from "@material-ui/core"

const Review=({checkoutToken})=>{
  return (
    <>
     <Typography variant="h6" gutterBottom> Order Summary</Typography>

     <List disablePadding>
       {checkoutToken.live.line_items.map((product)=>(
         <ListItem style={{padding:"10px 0"}} key={product.name}>
           <ListItemText primary={product.name} secondary={`quantity: (${product.quantity})`}/>
           <Typography variant="subtitle1" style={{fontWeight:"700"}}>
             {product.line_total.formatted_with_symbol}
           </Typography>
         </ListItem>
       ))}
     </List>
     <ListItem style={{padding:"10px 0"}}>
       <ListItemText primary="total"/>
         <Typography variant ="subtitle" style={{fontWeight:"700"}}>
           {checkoutToken.live.subtotal.formatted_with_symbol}
         </Typography>
     </ListItem>
    </>
  )
}




export default Review