import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const CHARACTER_DETAIL = gql`
  query CharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      status
      type
      image
    }
  }
`;

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(CHARACTER_DETAIL, {
    variables: { id },
    skip: Number.isNaN(id),
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <div>Error fetching data</div>;
  if (loading) return <div>Loading</div>;

  const { character } = data;

  return (
    <div>
      {character && (
        <>
          <Image
            src={character.image}
            alt={`${character.name} image`}
            width={300}
            height={300}
          />
          <div>
            <span>{character.id}</span> - <span>{character.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
