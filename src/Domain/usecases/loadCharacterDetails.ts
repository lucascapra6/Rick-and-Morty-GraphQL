import {CharacterDetailsModel} from '../models/characterDetailsModel';

export interface LoadCharacterDetails {
  loadByName: () => Promise<CharacterDetailsModel>;
}
