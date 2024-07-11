import React from 'react'
import {Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material'
import { useSelector } from 'react-redux'



const ShoppingCart = ()=>{
const cartItems = useSelector(state=>state.cart.cartItems)
console.log(cartItems)
const calculateTotal = ()=>{
    let cartItemsTotal = cartItems.reduce((total, item)=>total+parseInt(item.price), 0)
    console.log(cartItemsTotal)
    return cartItemsTotal
}

const handleCheckout  = ()=>{
    alert('Thank You For Your Puchase!')
}

return(
    <Box>
        <Typography variant = 'h2'>Shopping Cart</Typography>
        <TableContainer>
            <Table>
                <TableBody>
                    {
                        cartItems.map(item=>(
                          <TableRow key = {item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                          </TableRow>  
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

        <Typography variant = 'h4'>TOTAL: ${calculateTotal()}</Typography>
        <Button onClick = {handleCheckout}>CHECKOUT</Button>
    </Box>
)
}

export default ShoppingCart