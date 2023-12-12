import {LoadAllCharacteres} from '../../Domain/usecases/loadAllCharacteres';
import {CHARACTERS} from '../protocols/GraphQL/queries';
import {
  GraphQLClient,
  GraphqlResponse,
} from '../protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharactersModel} from '../model/remoteLoadAllCharactersModel';

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
    return {data, loading, errors};
  }
}
