import {CharacterBaseInfoModel} from '../../Domain/models/characterBaseInfoModel';

export type RemoteLoadAllCharactersModel = {
  characters: {
    info: {
      count: number;
      next: null | number;
    };
    results: CharacterBaseInfoModel[];
  };
};
