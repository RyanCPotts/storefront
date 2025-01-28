import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../store/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={() => handleCategoryClick(category.name)}>
            {category.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;