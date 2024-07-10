
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
const API_URL = import.meta.env.VITE_API_SERVER;
console.log(API_URL)
// export const SET_CATEGORIES = 'CATEGORY'
// export const ADD_TO_CART = 'ADD_TO_CART'
// export const SET_PRODUCTS = 'FILTER_PRODUCTS'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const category = (name)=>({
    
        type: 'CATEGORY',
        payload: name
    
})

export const filteredProducts = (products)=>({
type: 'FILTER_PRODUCTS',
payload: products
})

export const addToCart = (product)=>({
        type: 'ADD_TO_CART',
        payload: {...product, id:uuidv4()}
})

export const removeFromCart = (product)=>({
        type: 'REMOVE_FROM_CART',
        payload: product.id
})

export const updateProductQuantity = (productID, quantity)=>({
        type: 'UPDATE_PRODUCT_QUANTITY',
        payload: {productID, quantity}
})

export const filteredProductsByCategory = (category)=>({
        type: 'FILTER_PRODUCTS_BY_CATEGORY',
        payload: category
})

export const setActiveCategory = (category)=>({
        type: 'SET_ACTIVE_CATEGORY',
        payload: category
})

export const updateProductOnServer = (productID, quantity)=>async(dispatch)=>{
        // try {
                await axios.put(`${API_URL}/products/${productID}`, {inStock:quantity})
                dispatch(fetchProducts())
        // }
        // catch(e){
        // console.error('error', e)
        // }
}

export const fetchProducts = ()=>async(dispatch)=>{
        try {
        const response = await axios.get(`${API_URL}/products`)
        console.log(response)        
        dispatch(filteredProducts(response.data))
        }
        catch(e) {
        console.error('error', e)
}}

export const fetchCategories = ()=>async(dispatch)=>{
        try {
        const response = await axios.get(`${API_URL}/categories`)
        console.log(response)        
        dispatch(category(response.data))
        }
        catch(e) {
        console.error('error', e)
}}

export const addToCartAndUpdateStock = (product)=>async(dispatch)=>{
        try{
        dispatch(addToCart(product));
        const decrementStock = product.inStock-1;
        console.log(decrementStock)
        await axios.put(`${API_URL}/products/${product.id}`, {inStock:decrementStock})
        dispatch(fetchProducts())
        }
        catch(e){       
        console.error('error', e)
        }
}

export const removeFromCartAndUpdateStock = (product) => async (dispatch) => {
        try {
            console.log('Removing from cart:', product);
            dispatch(removeFromCart(product));
            const incrementStock = product.inStock + 1;
            console.log('New stock value:', incrementStock);
            const response = await axios.put(`${API_URL}/products/${product.id}`, { inStock: incrementStock });
            console.log('API response:', response.data);
            dispatch(fetchProducts());
        } catch (e) {
            console.error('error', e);
        }
    };
    