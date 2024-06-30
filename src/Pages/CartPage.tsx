import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const CartPage: React.FC = () => {
  const { items, removeItem, clearCart } = useCartContext();

  const totalPrice = items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                style={{ height: 200, objectFit: 'contain' }}
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Button onClick={() => removeItem(item)} color="secondary">
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <Button variant="contained" color="secondary" onClick={clearCart} style={{ marginTop: '20px' }}>
        Clear Cart
      </Button>
    </div>
  );
};

export default CartPage;
