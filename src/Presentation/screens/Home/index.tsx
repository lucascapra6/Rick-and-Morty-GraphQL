import React from 'react';
import {LoadingStyled} from '../../components/Loading.styled';
import {CharactersList} from './components/CharactersList';
import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from 'react-native';
import {useCharactersList} from '../../hooks/Home/useCharactersList';
import {TextInputStyled} from '../../components/TextInput.styled';
import {ScreenStyled} from '../../components/Screen.styled';
import Title from './components/Title';
import {useMakeRemoteLoadCharacters} from '../../../Main/Factories/makeRemoteLoadCharacters';

export function Home() {
  const {
    loading,
    error,
    characters,
    handlePagination,
    hasListFinished,
    characterNameToSearch,
    setCharacterNameToSearch,
  } = useCharactersList(useMakeRemoteLoadCharacters());
  
  if (loading) return <LoadingStyled />;
  if (error) return <Text>Erro</Text>;

  return (
    <ScreenStyled>
      <Title>Rick and Morty</Title>
      <TextInputStyled
        placeholder={'Wich character would you like to see?'}
        value={characterNameToSearch}
        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
          const {text} = event.nativeEvent;
          setCharacterNameToSearch(text);
        }}
      />
      <CharactersList
        data={characters}
        handlePagination={() => handlePagination()}
        hasListFinished={hasListFinished}
      />
    </ScreenStyled>
  );
}
