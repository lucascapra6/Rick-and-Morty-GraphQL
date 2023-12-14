import React, {useCallback, useState} from 'react';
import Card from './Card';
import {FlatList} from 'react-native';
import {LoadingStyled} from '../../../components/Loading.styled';
import {Colors} from '../../../assets/colors/colors';
import {EmptyList} from './EmptyList';
import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';

type CharactersList = {
  data: CharacterBaseInfoModel[];
  handlePagination: () => void;
  hasListFinished: boolean;
};

export function CharactersList({
  data,
  handlePagination,
  hasListFinished,
}: CharactersList) {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);
  const NUMBER_OF_ITEMS_PER_PAGE = 20;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Card character={item} />}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.6}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      onEndReached={({distanceFromEnd}) => {
        if (!onEndReachedCalledDuringMomentum && distanceFromEnd > 0) {
          handlePagination();
          setOnEndReachedCalledDuringMomentum(true);
        }
      }}
      onMomentumScrollBegin={() => {
        setOnEndReachedCalledDuringMomentum(false);
      }}
      ListFooterComponent={
        hasListFinished || data.length < NUMBER_OF_ITEMS_PER_PAGE ? null : (
          <LoadingStyled color={Colors.secondary} />
        )
      }
      ListEmptyComponent={
        <EmptyList title={'Ops!'} message={'No character found.'} />
      }
    />
  );
}
