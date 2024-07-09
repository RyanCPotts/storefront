import React from 'react'
import { Satellite } from '@mui/icons-material'
import {List, ListItem, ListItemText, IconButton, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeFromCart } from '../../store/actions'

const SimpleCart = ()=> {
const cartItems = useSelector(state => state.cart.cartItems)
const dispatch = useDispatch();

const handleRemove = (id) => {
    dispatch(removeFromCart(id))
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
                        <IconButton edge = 'end' aria-label = 'delete' onClick = {()=>handleRemove(cartItem.id)}>
                            <DeleteIcon/>
                        </IconButton>
                      </ListItem>  
                    )

                    )
                }
            </List>
        </div>
    )

}

export default SimpleCart