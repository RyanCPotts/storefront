import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import productsReducer from './products'
import categoriesReducer from './categories'
import cartReducer from './cart/cart'

let reducers = combineReducers({products:productsReducer, categories:categoriesReducer, cart: cartReducer})

const store = createStore(reducers, composeWithDevTools())

export default store;