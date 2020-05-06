import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
`;

const Header = () => (
  <StyledHeader>
    <h1>Next.js Boilerplate</h1>
  </StyledHeader>
);

export default Header;
