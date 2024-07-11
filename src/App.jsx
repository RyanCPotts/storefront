import Header from './Components/Header'
import Categories from './Components/Categories'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{category, filteredProducts} from './store/actions/'
import { filteredProductsByCategory } from './store/actions/'
import Products from './Components/Products'
import SimpleCart from './Components/SimpleCart/index.jsx'
import { setActiveCategory } from './store/actions'
import { Routes, Route} from 'react-router-dom'
import { fetchCategories, fetchProducts} from './store/actions'
import ProductDetails from './Components/Products/productDetails.jsx'
import ShoppingCart from './Components/SimpleCart/shoppingcart.jsx'
// import "./app.scss";

const App=()=> {
const dispatch  = useDispatch();

useEffect(()=>{
  dispatch(fetchCategories());
  dispatch(fetchProducts());
},[dispatch])

const handleClick = (payload)=>{
  dispatch(setActiveCategory(payload))
  dispatch(filteredProductsByCategory(payload))
}
  return (
    <>
      <Header/>
      <SimpleCart/>
      <Routes>
        <Route path = '/'element = {<><Categories handleClick = {handleClick}/>
        <Products /></>}> </Route>
        <Route path = '/products/:id' element = {<ProductDetails/>}/>
        <Route path = '/cart' element = {<ShoppingCart/>}/>
      </Routes>
    </>
  )
}

export default App