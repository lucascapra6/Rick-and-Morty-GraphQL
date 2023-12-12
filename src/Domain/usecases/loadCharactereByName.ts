import {CharacterDetailsModel} from '../models/characterDetailsModel';

export interface LoadCharactereByName {
  loadByName: () => Promise<CharacterDetailsModel>;
}
