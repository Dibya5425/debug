import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddToCartButton from './AddToCartButton';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage src={product.image} alt={product.name} />
      </Link>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton product={product} />
    </Card>
  );
};

export default ProductCard;