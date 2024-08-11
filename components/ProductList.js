import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { fetchProducts } from '../redux/productSlice';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <ProductGrid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;