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
`;

const Characters = ({ data }) => {
  return (
    <div>
      <StyledList>
        {data &&
          data.map((char) => {
            return (
              <li key={`character-${char.id}`}>
                <Link href={`/characters/${char.id}`}>
                  <a>{char.name}</a>
                </Link>
              </li>
            );
          })}
      </StyledList>
    </div>
  );
};

export async function getStaticProps() {
  const response = await request(
    'https://rickandmortyapi.com/graphql/',
    ALL_CHARACTERS,
    {
      id: 1,
    }
  );

  const data = response.current.results;

  return {
    props: { data },
  };
}

export default Characters;
