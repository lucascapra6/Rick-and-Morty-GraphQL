import React, {useState} from 'react';
import Card from './Card';
import {FlatList, Text} from 'react-native';
import {LoadingStyled} from '../../../components/Loading.styled';
import {Colors} from '../../../assets/colors/colors';
import {EmptyList} from './EmptyList';
import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';

type CharactersList = {
  data: CharacterBaseInfoModel[];
  handlePagination: (page: {distanceFromEnd: number}) => void;
  hasListFinished: boolean;
};

export function CharactersList({
  data,
  handlePagination,
  hasListFinished,
}: CharactersList) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Card character={item} />}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      onEndReachedThreshold={0.1}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      onEndReached={page => {
        handlePagination(page);
      }}
      ListFooterComponent={
        hasListFinished ? (
          <Text>Sem mais dados para exibir</Text>
        ) : (
          <LoadingStyled color={Colors.secondary} />
        )
      }
      ListEmptyComponent={
        <EmptyList title={'Ops!'} message={'Nenhum personagem encontrado.'} />
      }
    />
  );
}
