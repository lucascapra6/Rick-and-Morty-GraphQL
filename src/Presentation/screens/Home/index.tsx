import React from 'react';
import {LoadingStyled} from '../../components/Loading.styled';
import {CharactersList} from './components/CharactersList';
import {Text} from 'react-native';
import {useCharactersList} from '../../hooks/Home/useCharactersList';

export function Home() {
  const {loading, error, characters, handlePagination, page, hasListFinished} =
    useCharactersList();

  if (loading) return <LoadingStyled />;
  if (error) return <Text>Erro</Text>;

  return (
    <>
      <CharactersList
        data={characters}
        handlePagination={() => handlePagination(page)}
        hasListFinished={hasListFinished}
      />
    </>
  );
}
