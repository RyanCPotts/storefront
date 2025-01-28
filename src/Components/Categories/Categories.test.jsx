import { render, screen, fireEvent } from '@testing-library/react';
import Categories from './index'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../../store/categories';

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

    // Dispatch the action to populate the state
    store.dispatch({
      type: 'categories/setCategories',
      payload: mockCategories,
    });

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

    store.dispatch({
      type: 'categories/setCategories',
      payload: mockCategories,
    });

    renderWithStore(store);

    const fruitCategory = screen.getByText(/Fruit/);
    fireEvent.click(fruitCategory);

    // Test what should happen after the click
    // Here we expect that some handler logic is executed, for example:
    expect(fruitCategory).toHaveClass('active');  // Assuming you'd apply active class for selected category.
  });
});
