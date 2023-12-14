import {useApolloClient} from '@apollo/client';
import {GraphQLClient} from '../../Data/protocols/GraphQL/graphQLClient';
import {LoadCharacterDetails} from '../../Domain/usecases/loadCharacterDetails';
import {RemoteLoadCharacterDetails} from '../../Data/usecases/remoteLoadCharacterDetails';

export function useMakeRemoteLoadCharacterDetails(): LoadCharacterDetails {
  const client = useApolloClient() as GraphQLClient;
  return new RemoteLoadCharacterDetails(client);
}
