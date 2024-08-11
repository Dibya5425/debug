import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0;
  color: #6c757d;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 E-Shop. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;