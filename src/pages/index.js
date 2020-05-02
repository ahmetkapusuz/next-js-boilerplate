import Link from 'next/link';
import styled from 'styled-components';
import HelloWorld from '../components/HelloWorld';

const Container = styled.div`
  text-align: center;
`;

export default () => (
  <Container>
    <h1>Next.js Boilerplate</h1>
    <HelloWorld />
    <Link href="/characters">Characters</Link>
  </Container>
);
