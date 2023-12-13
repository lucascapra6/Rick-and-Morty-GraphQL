import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useApolloClient} from '@apollo/client';
import {GraphQLClient} from '../../../Data/protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharacteres} from '../../../Data/usecases/remoteLoadAllCharacteres';
import {CharacterBaseInfoModel} from '../../../Domain/models/characterBaseInfoModel';
import {LoadingStyled} from '../../components/Loading.styled'
import {PaginatedList} from './components/PaginatedList';

export function Home() {
  const client = useApolloClient() as GraphQLClient;
  const remoteLoadAllCharacteres = new RemoteLoadAllCharacteres(client);
  const [characters, setCharacters] = useState<CharacterBaseInfoModel[]>([]);
  const [hasListFinished, setHasListFinished] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  async function loadCharacters() {
    try {
      setLoading(true);
      const {data} = await remoteLoadAllCharacteres.loadAll(page);
      // @ts-ignore
      setCharacters(data.characters.results);
      setLoading(false);
    } catch (e) {
      console.log('error', e);
    }
  }
  async function loadMoreCharacters(page: number) {
    const {data} = await remoteLoadAllCharacteres.loadAll(page);
    setCharacters(prev => [...prev, ...data.characters.results]);
    if (data.characters.info.next === null) {
      setHasListFinished(true);
    }
  }
  async function handlePagination(pageValue: number) {
    if (!hasListFinished) {
      await loadMoreCharacters(pageValue + 1);
      setPage(pageValue + 1);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  if (loading) return <LoadingStyled />;

  return (
    <>
      <PaginatedList
        data={characters}
        handlePagination={() => handlePagination(page)}
        hasListFinished={hasListFinished}
      />
    </>
  );
}
