import {CharacterDetailsModel} from '../models/characterDetailsModel';

export interface LoadCharacterDetails {
  loadDetails: (id: string) => Promise<{data: CharacterDetailsModel}>;
}
