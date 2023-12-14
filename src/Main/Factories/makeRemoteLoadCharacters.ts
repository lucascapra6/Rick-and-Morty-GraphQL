import {LoadCharacters} from '../../Domain/usecases/loadAllCharacteres';
import {RemoteLoadAllCharacteres} from '../../Data/usecases/remoteLoadAllCharacteres';
import {useApolloClient} from '@apollo/client';
import {GraphQLClient} from '../../Data/protocols/GraphQL/graphQLClient';

export function useMakeRemoteLoadCharacters(): LoadCharacters {
  const client = useApolloClient() as GraphQLClient;
  return new RemoteLoadAllCharacteres(client);
}
