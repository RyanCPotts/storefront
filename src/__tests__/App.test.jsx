import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { ShoppingCart } from '@mui/icons-material';

describe('<App />', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(ShoppingCart)).toBeInTheDocument();
  });
});
