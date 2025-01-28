import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer, { setCategories } from '../../store/categories';  // Correct path and single import

describe('categories reducer', () => {
  let store;
  beforeEach(() => {
    // Resetting the store for each test
    store = configureStore({ reducer: { categories: categoriesReducer } });
  });

  test('should handle initial state', () => {
    const state = store.getState().categories;
    expect(state.categories).toEqual([]);
  });

  test('should handle setCategories action', () => {
    const categoriesData = [
      { name: 'fruit', displayName: 'Fruit' },
      { name: 'vegetable', displayName: 'Vegetable' },
    ];

    store.dispatch(setCategories(categoriesData));

    const state = store.getState().categories;
    expect(state.categories).toEqual(categoriesData);
  });
});
