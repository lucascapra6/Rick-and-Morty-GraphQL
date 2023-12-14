import {CharacterBaseInfoModel} from '../models/characterBaseInfoModel';

export interface LoadCharacters {
  loadAll: (
    page: number,
    name: string,
  ) => Promise<{data: CharacterBaseInfoModel}>;
}
