import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useApolloClient} from '@apollo/client';
import {GraphQLClient} from '../../../Data/protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharacteres} from '../../../Data/usecases/remoteLoadAllCharacteres';

export function Home() {
  const client = useApolloClient() as GraphQLClient;
  const remoteLoadAllCharacteres = new RemoteLoadAllCharacteres(client);
  async function loadCharacteres() {
    await remoteLoadAllCharacteres.loadAll(1);
  }

  useEffect(() => {
    loadCharacteres();
  }, []);
  return <Text>Home</Text>;
}
