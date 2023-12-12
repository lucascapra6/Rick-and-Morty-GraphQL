import {GraphQLRequest} from '@apollo/client';

export interface GraphQLClient<T = any> {
  query: (requestParams: GraphQLRequest) => Promise<GraphqlResponse<T>>;
}

export type GraphqlResponse<T> = {
  data: T;
  errors: any;
  loading: boolean;
};
