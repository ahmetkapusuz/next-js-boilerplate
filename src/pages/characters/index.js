import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { request } from 'graphql-request';

const ALL_CHARACTERS = `
  query AllCharacters($page: Int) {
    current: characters(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

const StyledList = styled.ul`
  list-style: decimal;
  line-height: 1.5;
`;

const Characters = ({ data }) => (
  <div>
    <StyledList>
      {data &&
        data.map((char) => (
          <li key={`character-${char.id}`}>
            <Link href={`/characters/${char.id}`}>
              <a>{char.name}</a>
            </Link>
          </li>
        ))}
    </StyledList>
  </div>
);

export async function getStaticProps() {
  const response = await request(process.env.GRAPHQL_API_URL, ALL_CHARACTERS, {
    id: 1,
  });

  const data = response.current.results;

  return {
    props: { data },
  };
}

export default Characters;
