import {CHARACTER_DETAILS} from '../protocols/GraphQL/queries';
import {GraphQLClient} from '../protocols/GraphQL/graphQLClient';
import {LoadCharacterDetails} from '../../Domain/usecases/loadCharacterDetails';
import {CharacterDetailsModel} from '../../Domain/models/characterDetailsModel';
import {RemoteCharacterDetails} from '../model/remoteLoadCharacterDetails';

export class RemoteLoadCharacterDetails implements LoadCharacterDetails {
  constructor(
    private readonly graphqlClient: GraphQLClient<RemoteCharacterDetails>,
  ) {}

  async loadDetails(id: string): Promise<{data: CharacterDetailsModel}> {
    const {data} = await this.graphqlClient.query({
      query: CHARACTER_DETAILS,
      variables: {id: id},
    });
    return {data} as unknown as {data: CharacterDetailsModel};
  }
}
