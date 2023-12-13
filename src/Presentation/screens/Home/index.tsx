import React, {useEffect, useState} from 'react';
import {LoadingStyled} from '../../components/Loading.styled';
import {CharactersList} from './components/CharactersList';
import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from 'react-native';
import {useCharactersList} from '../../hooks/Home/useCharactersList';
import {TextInputStyled} from '../../components/TextInput.styled';

export function Home() {
  const {
    loading,
    error,
    characters,
    handlePagination,
    hasListFinished,
    characterNameToSearch,
    setCharacterNameToSearch,
  } = useCharactersList();

  if (loading) return <LoadingStyled />;
  if (error) return <Text>Erro</Text>;

  return (
    <>
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
    </>
  );
}
