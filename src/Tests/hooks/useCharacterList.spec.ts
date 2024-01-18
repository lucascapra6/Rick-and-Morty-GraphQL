import {renderHook} from '../test-utils';
import {useCharactersList} from '../../Presentation/hooks/Home/useCharactersList';
import {act, waitFor} from '@testing-library/react-native';
import {LoadCharacters} from '../../Domain/usecases/loadAllCharacteres';
import {
  remoteLoadAllCharactersMock,
  remoteLoadAllCharactersWithoutNextPageMock,
} from '../mocks/remoteLoadAllCharactersMock';

class LoadCharactersSpy implements LoadCharacters {
  loadAll() {
    return Promise.resolve({data: remoteLoadAllCharactersMock});
  }
}
describe('useCharactersList', () => {
  it('should load the characters', async () => {
    const {result} = renderHook(() =>
      useCharactersList(new LoadCharactersSpy()),
    );
    await waitFor(() => {
      return result.current.characters.length > 0;
    });
    expect(result.current.characters.length).toBeGreaterThan(0);
  });
  it('should set the page to page + 1 when handlePagination is called', async () => {
    const {result} = renderHook(() =>
      useCharactersList(new LoadCharactersSpy()),
    );
    await act(async () => {
      await result.current.handlePagination();
    });
    expect(result.current.page).toBe(2);
  });
  it('should set characterNameToSearch when setCharacterNameToSearch is called', async () => {
    const {result} = renderHook(() =>
      useCharactersList(new LoadCharactersSpy()),
    );
    await act(async () => {
      await result.current.setCharacterNameToSearch('John');
    });
    expect(result.current.characterNameToSearch).toBe('John');
  });
  it('should set error to true when an error occurs during character loading', async () => {
    const loadCharactersSpy = new LoadCharactersSpy();
    loadCharactersSpy.loadAll = jest.fn(() => Promise.reject('Error'));

    const {result} = renderHook(() => useCharactersList(loadCharactersSpy));

    await waitFor(() => {
      return result.current.error;
    });

    expect(result.current.error).toBe(true);
  });
  it("should setHasListFinished if there's no more data to load", async () => {
    const loadCharactersSpy = new LoadCharactersSpy();
    loadCharactersSpy.loadAll = jest.fn(() =>
      Promise.resolve({data: remoteLoadAllCharactersWithoutNextPageMock}),
    );

    const {result} = renderHook(() => useCharactersList(loadCharactersSpy));

    await act(async () => {
      await result.current.handlePagination();
    });
    //call handlePagination again when hasListFinished is true, to certify that the page is not being incremented.
    await act(async () => {
      await result.current.handlePagination();
    });

    await waitFor(() => {
      expect(result.current.hasListFinished).toBe(true);
      expect(result.current.page).toBe(2);
    });
  });
});
