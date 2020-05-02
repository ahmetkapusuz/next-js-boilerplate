import React from 'react';
import Link from 'next/link';
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

const Characters = ({ data }) => {
  return (
    <div>
      <ul>
        {data &&
          data.map((char) => {
            return (
              <li key={`character-${char.id}`}>
                <Link href={`/characters/${char.id}`}>{char.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // const data = { id: 1, name: 'Rick' };

  const response = await request(
    'https://rickandmortyapi.com/graphql/',
    ALL_CHARACTERS,
    {
      id: 1,
    }
  );

  console.log('response', response);
  const data = response.current.results;

  return {
    props: { data },
  };
}

export default Characters;
