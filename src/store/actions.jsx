
import {v4 as uuidv4} from 'uuid'
export const category = (name)=>({
    
        type: 'CATEGORY',
        payload: name
    
})

export const filteredProducts = (product)=>({
type: 'FILTER_PRODUCTS',
payload: product
})

export const addToCart = (product)=>({
        type: 'ADD_TO_CART',
        payload: {...product, id:uuidv4()}
})

export const removeFromCart = (id)=>({
        type: 'REMOVE_FROM_CART',
        payload: id
})