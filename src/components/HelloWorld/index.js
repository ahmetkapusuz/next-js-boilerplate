import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HelloWorld = () => (
  <div>
    <Header>Hello World</Header>
  </div>
);

export default HelloWorld;
