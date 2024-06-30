import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from '../Pages/ProductPage';
import CartPage from '../Pages/CartPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { CartProvider } from '../context/CartContext';

const AppRoutes: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Shopping Cart
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Products
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Cart
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;
