import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  TextField,
  Grid
} from '@mui/material';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);

  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const calculateTotal = () => {
    let cartItemsTotal = cartItems.reduce((total, item) => total + parseInt(item.price), 0);
    console.log(cartItemsTotal);
    return cartItemsTotal;
  };

  const handleCheckout = () => {
    alert('Thank You For Your Purchase!');
    // Here you can add further actions such as clearing the cart, sending data to the backend, etc.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to your backend
    console.log('Billing Address:', billingAddress);
    console.log('Shipping Address:', shippingAddress);
    console.log('Credit Card:', creditCard);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    handleCheckout();
  };

  return (
    <Box>
      <Typography variant="h2">Shopping Cart</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {cartItems.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4">TOTAL: ${calculateTotal()}</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Billing Address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Shipping Address"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Credit Card Number"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          CHECKOUT
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
