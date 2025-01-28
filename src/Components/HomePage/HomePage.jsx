import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Welcome to Our Store
      </Typography>
      <Typography variant="h5">
        Discover our amazing products and enjoy shopping!
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Shop Now
      </Button>
    </Container>
  );
};

export default LandingPage;