import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/Infra/GraphQLClient/ApolloClient';
import {Navigation} from './src/Presentation/navigation';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}

export default App;
