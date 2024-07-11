import React from 'react'
import { Satellite } from '@mui/icons-material'
import {List, ListItem, ListItemText, IconButton, Typography, Button} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeFromCart } from '../../store/actions'
import { removeFromCartAndUpdateStock } from '../../store/actions'
import { Link } from 'react-router-dom'

const SimpleCart = ()=> {
const cartItems = useSelector(state => state.cart.cartItems)
const dispatch = useDispatch();

const handleRemove = (product) => {
    dispatch(removeFromCartAndUpdateStock(product))
}

    return(
        <div>
            <Typography>
                Cart {cartItems.length > 0 ?`(${cartItems.length})`: `(none)`}
            </Typography>
            <List>
                {
                    cartItems.map(cartItem => (
                      <ListItem key = {cartItem.id}>
                        <ListItemText primary = {cartItem.name}/>
                        <IconButton edge = 'end' aria-label = 'delete' onClick = {()=>handleRemove(cartItem)}>
                            <DeleteIcon/>
                        </IconButton>
                      </ListItem>  
                    )

                    )
                }
            </List>
            <Button component = {Link} to = {`/cart`}>PAY THE MAN</Button>
        </div>
    )

}

export default SimpleCart