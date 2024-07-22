import React from 'react';
import { useSelector } from 'react-redux';

const Categories = ({ handleClick }) => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.name} onClick={() => handleClick(category.name)}>
            {category.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
