import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ShoppingCart } from 'lucide-react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
`;

const CartCount = styled.span`
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <Logo to="/">E-Shop</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </Nav>
      <CartIcon to="/cart">
        <ShoppingCart size={24} />
        <CartCount>{cartItemsCount}</CartCount>
      </CartIcon>
    </HeaderContainer>
  );
};

export default Header;