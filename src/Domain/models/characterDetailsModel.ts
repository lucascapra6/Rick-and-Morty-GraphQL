import {CharacterBaseInfoModel} from './characterBaseInfoModel';

export type CharacterDetailsModel = {
  character: CharacterBaseInfoModel & {
    type: string | undefined;
    status: string;
    location: {
      name: string;
    };
  };
};
