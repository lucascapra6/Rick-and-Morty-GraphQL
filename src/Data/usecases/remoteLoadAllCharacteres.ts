import {LoadAllCharacteres} from '../../Domain/usecases/loadAllCharacteres';
import {CharacterBaseInfoModel} from '../../Domain/models/characterBaseInfoModel';
import {CHARACTERS} from '../protocols/GraphQL/queries';
import {
  GraphQLClient,
  GraphqlResponse,
} from '../protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharactersModel} from '../model/remoteLoadAllCharactersModel';
import {ApolloClient} from '@apollo/client';

export class RemoteLoadAllCharacteres implements LoadAllCharacteres {
  constructor(
    private readonly graphqlClient: GraphQLClient<RemoteLoadAllCharactersModel>,
  ) {}
  async loadAll(
    page: number,
  ): Promise<GraphqlResponse<RemoteLoadAllCharactersModel>> {
    const {data, loading, errors} = await this.graphqlClient.query({
      query: CHARACTERS,
      variables: {page: page},
    });
    console.log(data);
    return {data, loading, errors};
  }
}
