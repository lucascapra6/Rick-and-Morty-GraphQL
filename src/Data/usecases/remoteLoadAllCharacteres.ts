import {LoadCharacters} from '../../Domain/usecases/loadAllCharacteres';
import {CHARACTERS} from '../protocols/GraphQL/queries';
import {GraphQLClient} from '../protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharactersModel} from '../model/remoteLoadAllCharactersModel';
import {CharacterBaseInfoModel} from '../../Domain/models/characterBaseInfoModel';

export class RemoteLoadAllCharacteres implements LoadCharacters {
  constructor(
    private readonly graphqlClient: GraphQLClient<RemoteLoadAllCharactersModel>,
  ) {}
  async loadAll(
    page: number,
    name: string,
  ): Promise<{data: CharacterBaseInfoModel}> {
    const {data} = await this.graphqlClient.query({
      query: CHARACTERS,
      variables: {page: page, name: name},
    });
    return {data} as unknown as {data: CharacterBaseInfoModel};
  }
}
