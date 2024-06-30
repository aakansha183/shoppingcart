import React from 'react';
import { ProductCardProps} from '../interfaces/Product';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';



const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart, handleAddToCart, handleRemoveFromCart }) => {
  return (
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
          <Button onClick={() => handleRemoveFromCart(product)} color="secondary">
            Remove
          </Button>
        ) : (
          <Button onClick={() => handleAddToCart(product)} color="primary">
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
