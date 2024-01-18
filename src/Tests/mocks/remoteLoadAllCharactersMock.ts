import {RemoteLoadAllCharactersModel} from '../../Data/model/remoteLoadAllCharactersModel';

export const remoteLoadAllCharactersMock: RemoteLoadAllCharactersModel = {
  characters: {
    info: {
      count: 1,
      next: 2,
    },
    results: [
      {
        id: '1',
        name: 'Rick',
        species: 'human',
        gender: 'male',
        image: 'image1',
      },
      {
        id: '2',
        name: 'Martin',
        species: 'human',
        gender: 'male',
        image: 'image2',
      },
    ],
  },
};

export const remoteLoadAllCharactersWithoutNextPageMock: RemoteLoadAllCharactersModel =
  {
    characters: {
      info: {
        count: 1,
        next: null,
      },
      results: [
        {
          id: '1',
          name: 'Rick',
          species: 'human',
          gender: 'male',
          image: 'image1',
        },
        {
          id: '2',
          name: 'Martin',
          species: 'human',
          gender: 'male',
          image: 'image2',
        },
      ],
    },
  };
