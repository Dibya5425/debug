import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts } from '../redux/productSlice';
import ProductList from '../components/ProductList';
import { Search } from 'lucide-react';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector(state => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeContainer>
      <h1>Welcome to E-Shop</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <Search size={20} />
          Search
        </SearchButton>
      </SearchContainer>
      <ProductList products={filteredProducts} />
    </HomeContainer>
  );
};

export default Home;