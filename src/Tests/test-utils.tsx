import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {Apollo} from '../Infra/GraphQLClient/ApolloClient';
import {Provider} from 'react-redux';
import {store} from '../Infra/Store/ReduxConfig';

const apolloClient: Apollo = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const wrapAllProviders = () => {
  return ({children}: {children: React.ReactNode}) => {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    );
  };
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: wrapAllProviders(), ...options});

const customRenderHook = <Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) => {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
};

export * from '@testing-library/react-native';

export {customRender as render, customRenderHook as renderHook};
