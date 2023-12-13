import {GraphqlResponse} from '../../Data/protocols/GraphQL/graphQLClient';

export interface LoadAllCharacteres {
  loadAll: (page: number, name: string) => Promise<GraphqlResponse<any>>;
}
