import {
  ApolloClient,
  GraphQLRequest,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {
  GraphQLClient,
  GraphqlResponse,
} from '../../Data/protocols/GraphQL/graphQLClient';

type Apollo = ApolloClient<NormalizedCacheObject>;

const BASE_URL = 'https://rickandmortyapi.com/graphql';

export class ApolloClientGraphql implements GraphQLClient {
  async query(requestParams: GraphQLRequest): Promise<GraphqlResponse<any>> {
    return (await client.query({
      query: requestParams.query,
      variables: requestParams.variables,
    })) as GraphqlResponse<any>;
  }
}
export const client: Apollo = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
