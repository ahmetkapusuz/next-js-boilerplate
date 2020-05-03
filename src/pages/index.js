import Link from 'next/link';
import styled from 'styled-components';
import HelloWorld from '../components/HelloWorld';

const Container = styled.div`
  text-align: center;
`;

export default () => (
  <Container>
    <HelloWorld />
    <Link href="/characters">
      <a>Characters</a>
    </Link>
  </Container>
);
