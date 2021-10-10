import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from "@material-ui/core"
import {ShoppingCart} from "@material-ui/icons"
import useStyles from "./Style"

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
         <AppBar position="sticky" className={classes.appBar} color="inherit">
            <Toolbar>
              <Typography variant="h6" className={classes.title} color="inherit">
                {/* <img src={} alt="commerce shop" height="25px" className={classes.image}/> */}
                Phone shop
              </Typography>
            <div className={classes.grow}></div>
            <div className={classes.button}>
              <IconButton arial-label="show cart item" color="inherit">
                <Badge badgeContent={0} color="secondary">
                   <ShoppingCart/>
                </Badge>
              </IconButton>
            </div>
            </Toolbar>
         </AppBar>
            
        </>
    )
}

export default Navbar
