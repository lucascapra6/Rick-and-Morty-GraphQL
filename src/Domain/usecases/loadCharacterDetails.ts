import {RemoteCharacterDetailsModel} from '../../Data/model/remoteLoadCharacterDetailsModel';

export interface LoadCharacterDetails {
  loadDetails: (id: string) => Promise<{data: RemoteCharacterDetailsModel}>;
}
