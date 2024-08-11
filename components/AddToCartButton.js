import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../redux/cartSlice';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button onClick={handleAddToCart}>Add to Cart</Button>
  );
};

export default AddToCartButton;