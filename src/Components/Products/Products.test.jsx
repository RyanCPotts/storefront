import { render, screen } from '@testing-library/react';
import Products from './index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../store/products';

const renderWithStore = (store) => {
  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

describe('<Products />', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  test('renders product data based on category', () => {
    const mockProducts = [
      { id: 1, name: 'Apple', category: 'fruit' },
      { id: 2, name: 'Carrot', category: 'vegetable' },
    ];

    store.dispatch({
      type: 'products/setProducts',
      payload: mockProducts,
    });

    renderWithStore(store);

    // You might have a filter based on selected categories
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Carrot')).toBeInTheDocument();
  });
});
