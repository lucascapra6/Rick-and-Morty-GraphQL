import {CharacterBaseInfoModel} from '../../Domain/models/characterBaseInfoModel';

export type RemoteLoadAllCharactersModel = {
  characters: {
    info: {
      count: number;
    };
  };
  results: CharacterBaseInfoModel[];
};
