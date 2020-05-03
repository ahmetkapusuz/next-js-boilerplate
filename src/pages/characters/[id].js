import React from 'react';
import { withApollo } from '../../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';

export const CHARACTER_DETAIL = gql`
  query CharacterDetail($id: ID) {
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
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: false,
  });

  if (error) return <div>Error fetching data</div>;
  if (loading) return <div>Loading</div>;

  const { character } = data;

  return (
    <div>
      {character && (
        <>
          <img src={character.image} alt="Character image" />
          <div>
            <span>{character.id}</span> - <span>{character.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default withApollo({ ssr: true })(CharacterDetail);
