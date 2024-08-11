import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts } from '../redux/productSlice';
import AddToCartButton from './AddToCartButton';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h1`
  margin: 0 0 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const ProductDescription = styled.p`
  margin: 0 0 1rem 0;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, status } = useSelector(state => state.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [products, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton product={product} />
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductDetails;