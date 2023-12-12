import {CharacterBaseInfoModel} from '../models/characterBaseInfoModel';

export interface LoadAllCharacteres {
  loadAll: () => Promise<CharacterBaseInfoModel[]>;
}
