import Header from './Components/Header'
import Categories from './Components/Categories'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{category, filteredProducts} from './store/actions/'
import { filteredProductsByCategory } from './store/actions/'
import Products from './Components/Products'
import SimpleCart from './Components/SimpleCart'
import { setActiveCategory } from './store/actions'
import { Routes, Route} from 'react-router-dom'
import { fetchCategories, fetchProducts} from './store/actions'
// import "./app.scss";

function App() {
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
      </Routes>
    </>
  )
}

export default App