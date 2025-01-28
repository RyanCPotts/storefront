import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Add this import to extend expect
import Categories from './index'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer, { setCategories, setActiveCategory } from '../../store/categories';


  
import Categories from './index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const renderWithStore = (store) => {
  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
};

describe('<Categories />', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        categories: categoriesReducer,
      },
    });
  });

  test('renders category names', () => {
    const mockCategories = [
      { name: 'fruit', displayName: 'Fruit' },
      { name: 'vegetable', displayName: 'Vegetable' },
    ];

    store.dispatch(setCategories(mockCategories));

    renderWithStore(store);

    // Check if categories are rendered in the document
    expect(screen.getByText(/Fruit/)).toBeInTheDocument();
    expect(screen.getByText(/Vegetable/)).toBeInTheDocument();
  });

  test('handles category click interaction', () => {
    const mockCategories = [
      { name: 'fruit', displayName: 'Fruit' },
      { name: 'vegetable', displayName: 'Vegetable' },
    ];

    store.dispatch(setCategories(mockCategories));

    renderWithStore(store);

    const fruitCategory = screen.getByText(/Fruit/);
    fireEvent.click(fruitCategory);

    expect(fruitCategory).toHaveClass('active');  // Assuming you'd apply active class for selected category.
  });
});