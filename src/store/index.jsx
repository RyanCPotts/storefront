import {configureStore} from '@reduxjs/toolkit'
import {composeWithDevTools} from '@redux-devtools/extension'
import productsReducer from './products'
import categoriesReducer from './categories'
import cartReducer from './cart/cart'
import { thunk } from 'redux-thunk'

let reducers = {products:productsReducer, categories:categoriesReducer, cart: cartReducer}

const store = configureStore({reducer:reducers, middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)})

export default store;