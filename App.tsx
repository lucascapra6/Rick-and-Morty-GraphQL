import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/Infra/GraphQLClient/ApolloClient';
import {Navigation} from './src/Presentation/navigation';
import ReduxConfig from './src/Infra/Store/ReduxConfig';
import {Provider} from 'react-redux';

if (__DEV__) {
  import('./reactotronConfig').then(() => console.log('Reactotron Configured'));
}
function App(): JSX.Element {
  const {store} = ReduxConfig();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
