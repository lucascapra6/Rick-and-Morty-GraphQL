import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/Infra/GraphQLClient/ApolloClient';
import {Navigation} from './src/Presentation/navigation';

if (__DEV__) {
  import('./reactotronConfig').then(() => console.log('Reactotron Configured'));
}
function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}

export default App;
