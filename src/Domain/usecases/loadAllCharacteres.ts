import {RemoteLoadAllCharactersModel} from '../../Data/model/remoteLoadAllCharactersModel';

export interface LoadAllCharacteres {
  loadAll: (page: number) => Promise<{
    data: RemoteLoadAllCharactersModel;
    loading: boolean;
    errors: any;
  }>;
}
