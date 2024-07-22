import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart/cart.jsx';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
