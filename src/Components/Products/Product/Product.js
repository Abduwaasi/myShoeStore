import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import useStyles from "./Styles"
import { AddShoppingCart } from "@material-ui/icons";
import { useGlobalContext } from "../../../Context";

const Product = ({product}) => {
    const classes = useStyles()
    const {id,name, description,media,price}= product
    const {handleAddToCart} = useGlobalContext()

  
    return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={media.source} title={name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6">#{price.formatted}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html:description}}/>
          
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} onClick={()=>handleAddToCart(id,1)}>
        <IconButton arial-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
