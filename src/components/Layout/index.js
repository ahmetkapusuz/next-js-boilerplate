import React from 'react';
import styled from 'styled-components';
import Header from '../Header.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;
