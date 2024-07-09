import Header from './Components/Header'
import Categories from './Components/Categories'
import React from 'react'
import { useDispatch } from 'react-redux'
import{category, filteredProducts} from './store/actions/'
import Products from './Components/Products'
import SimpleCart from './Components/SimpleCart'
// import "./app.scss";

function App() {
const dispatch  = useDispatch();

const handleClick = (payload)=>{
  dispatch(category(payload))
  dispatch(filteredProducts(payload))
}
  return (
    <>
      <Header/>
      <SimpleCart/>
      <Categories handleClick = {handleClick}/>
      <Products />
    </>
  )
}

export default App