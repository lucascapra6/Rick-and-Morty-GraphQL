import {CharacterBaseInfoModel} from './characterBaseInfoModel';

export type CharacterDetailsModel = CharacterBaseInfoModel & {
  type: string | undefined;
  status: string;
  location: {
    name: string;
  };
};
