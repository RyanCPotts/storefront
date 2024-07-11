import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Card, Typography, Button} from '@mui/material'
import { addToCart, addToCartAndUpdateStock} from '../../store/actions';
import { PanoramaWideAngleSelectRounded } from '@mui/icons-material';
import {Link} from 'react-router-dom'

const Products = ()=>{
const filteredProducts = useSelector(state => state.products.filteredProducts)
const activeCategory = useSelector(state => state.categories.activeCategory)
const categories = useSelector(state => state.categories.categories)
const dispatch = useDispatch()

const activeCategoryDetails = categories.find(category => category.name === activeCategory)


const handleAddToCart = (product)=>{
    if(product.inStock > 0){
        dispatch(addToCartAndUpdateStock(product))
        console.log('product decements', product.inStock)
    }
}
    return(
       <>
       {activeCategory && (
        <div>
        <h1>{activeCategoryDetails.displayName}</h1>
        <h3>{activeCategoryDetails.description}</h3>
        {filteredProducts.map((product, idx) => (
            <Card key = {idx}> 
                <Typography variant = 'h5' gutterBottom>{product.name}</Typography>
                <Typography variant = 'body2'>{product.description}</Typography>
                <Typography variant = 'body1'>${product.price}</Typography>
                <Button onClick = {()=>handleAddToCart(product)} disabled = {product.inStock <= 0}>Add To Cart</Button>
                <Button component={Link}to={`/products/${product.id}`}>View Details</Button>
            </Card>
        ))}
        </div>
       )}
       </>
    )
}

export default Products