import {CHARACTER_DETAILS} from '../protocols/GraphQL/queries';
import {GraphQLClient} from '../protocols/GraphQL/graphQLClient';
import {LoadCharacterDetails} from '../../Domain/usecases/loadCharacterDetails';
import {RemoteCharacterDetailsModel} from '../model/remoteLoadCharacterDetailsModel';

export class RemoteLoadCharacterDetails implements LoadCharacterDetails {
  constructor(
    private readonly graphqlClient: GraphQLClient<RemoteCharacterDetailsModel>,
  ) {}

  async loadDetails(id: string): Promise<{data: RemoteCharacterDetailsModel}> {
    const {data} = await this.graphqlClient.query({
      query: CHARACTER_DETAILS,
      variables: {id: id},
    });
    return {data} as unknown as {data: RemoteCharacterDetailsModel};
  }
}
