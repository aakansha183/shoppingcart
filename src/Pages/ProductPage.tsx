import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/Product';
import { useCartContext } from '../context/CartContext';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { items, addItem, removeItem } = useCartContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product) => {
        const isInCart = items.some(item => item.id === product.id);

        return (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                style={{ height: 200, objectFit: 'contain' }}
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  ${product.price}
                </Typography>
                {isInCart ? (
                  <Button onClick={() => removeItem(product)} color="secondary">
                    Remove
                  </Button>
                ) : (
                  <Button onClick={() => addItem(product)} color="primary">
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductPage;

