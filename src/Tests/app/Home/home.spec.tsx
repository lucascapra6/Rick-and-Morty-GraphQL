import {render} from '../../test-utils';

import {act, fireEvent, waitFor} from '@testing-library/react-native';
import {Home} from '../../../Presentation/screens/Home';
import * as useCharactersListModule from '../../../Presentation/hooks/Home/useCharactersList';
import {CharacterBaseInfoModel} from '../../../Domain/models/characterBaseInfoModel';

/*jest.mock('../../../Presentation/hooks/Home/useCharactersList', () => ({
  useCharactersList: jest.fn(() => ({
    loading: false,
    error: false,
    characters: [],
    handlePagination: jest.fn(),
    hasListFinished: false,
    characterNameToSearch: '',
    setCharacterNameToSearch: jest.fn(),
  })),
}));*/

jest.mock('../../../Presentation/hooks/Home/useCharactersList');
describe('Home', () => {
  const mockedData = {
    loading: false,
    error: false,
    characters: [],
    handlePagination: jest.fn(),
    hasListFinished: false,
    characterNameToSearch: '',
    setCharacterNameToSearch: jest.fn(),
    page: 0,
  };
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('should render error screen when theres an error', async function () {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    spy.mockReturnValue({
      ...mockedData,
      error: true,
    });

    const {getByText} = render(<Home />);
    expect(getByText('Erro')).toBeDefined();

    spy.mockRestore(); // Restore the original implementation
  });
  it('renders loading spinner while data is loading', () => {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    spy.mockReturnValue({
      ...mockedData,
      loading: true,
    });

    const {getByTestId} = render(<Home />);
    expect(getByTestId('loading')).toBeDefined();

    spy.mockRestore(); // Restore the original implementation
  });
  it('should render the Home with correct title', async function () {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    spy.mockReturnValue(mockedData);
    const {findByTestId} = render(<Home />);
    await waitFor(async () => {
      const title = await findByTestId('home-title');
      expect(title.props.children).toBe('Rick and Morty');
    });
  });
  it('should render empty page when theres no characters in the list', async function () {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    spy.mockReturnValue(mockedData);
    const {findByTestId} = render(<Home />);
    await waitFor(async () => {
      const emptyList = await findByTestId('empty-list');
      expect(emptyList).toBeDefined();
    });
  });
  it('should render characters in the list with correct props', async function () {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    const character: CharacterBaseInfoModel = {
      id: '1',
      name: 'Rick',
      image: 'image',
      gender: 'Male',
      species: 'Human',
    };
    spy.mockReturnValue({...mockedData, characters: [character]});
    const {findByTestId} = render(<Home />);
    await waitFor(async () => {
      const charactersList = await findByTestId('characters-list');
      expect(charactersList).toBeDefined();
    });
  });
  it('should render input', async function () {
    const spy = jest.spyOn(useCharactersListModule, 'useCharactersList');
    const character: CharacterBaseInfoModel = {
      id: '1',
      name: 'Rick',
      image: 'image',
      gender: 'Male',
      species: 'Human',
    };
    spy.mockReturnValue({
      ...mockedData,
      characterNameToSearch: 'lucas',
      characters: [character],
    });
    const home = render(<Home />);
    const textInput = await home.findByTestId('character-search-input');
    await waitFor(() => {
      expect(textInput.props.value).toBe('lucas');
    });
  });
});
