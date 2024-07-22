import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart';
import ProductDetails from './Components/Products/productDetails';
import ShoppingCart from './Components/SimpleCart/shoppingcart';

import { fetchCategories, fetchProducts, setActiveCategory, filteredProductsByCategory } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (categoryName) => {
    dispatch(setActiveCategory(categoryName));
    dispatch(filteredProductsByCategory(categoryName));
  };

  return (
    <>
      <Header />
      <SimpleCart />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories handleClick={handleClick} />
              <Products />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
};

export default App;
