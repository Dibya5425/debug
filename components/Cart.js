import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  margin: 0 0.5rem;
`;

const RemoveButton = styled.button`
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const TotalSection = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              </ItemDetails>
              <QuantityControl>
                <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</QuantityButton>
                <QuantityInput 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
          <TotalSection>
            Total: ${totalPrice.toFixed(2)}
          </TotalSection>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;