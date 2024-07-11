import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import React from 'react'

const ProductDetails = ()=>{
const {id} = useParams();
const product = useSelector((state)=>state.products.products.find((product)=>product.id === parseInt(id)))

if(!product){
    return <Typography variant = 'h3'>Product Not Found</Typography>
}
return(
    <Box>
        <Typography variant = 'h3'>{product.name}</Typography>
        <Typography variant = 'h3'>{product.description}</Typography>
        <Typography variant = 'h3'>Price: ${product.price}</Typography>
        <Typography variant = 'h3'>In Stock: {product.inStock}</Typography>
        
    </Box>
)
}

export default ProductDetails