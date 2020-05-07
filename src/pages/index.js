import Link from 'next/link';
import styled from 'styled-components';
import HelloWorld from '../components/HelloWorld';

const Container = styled.div`
  text-align: center;
`;

const Home = () => (
  <Container>
    <HelloWorld />
    <Link href="/characters">
      <a>Characters</a>
    </Link>
    <br />
    <Link href="/mdxExample">
      <a>MDX Example</a>
    </Link>
  </Container>
);

export default Home;
