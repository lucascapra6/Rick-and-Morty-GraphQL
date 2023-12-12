/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ApolloProvider, useApolloClient} from '@apollo/client';
import {
  ApolloClientGraphql,
  client,
} from './src/Infra/GraphQLClient/ApolloClient';
import {RemoteLoadAllCharacteres} from './src/Data/usecases/remoteLoadAllCharacteres';
import {GraphQLClient} from './src/Data/protocols/GraphQL/graphQLClient';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {}, []);

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}

const Component = () => {
  const client = useApolloClient() as GraphQLClient;
  const remoteLoadAllCharacteres = new RemoteLoadAllCharacteres(client);

  useEffect(() => {
    remoteLoadAllCharacteres.loadAll(1);
  }, []);

  return (
    <SafeAreaView>
      <Text>teste</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
