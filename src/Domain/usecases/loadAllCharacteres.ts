import {RemoteLoadAllCharactersModel} from '../../Data/model/remoteLoadAllCharactersModel';

export interface LoadCharacters {
  loadAll: (
    page: number,
    name: string,
  ) => Promise<{data: RemoteLoadAllCharactersModel}>;
}
