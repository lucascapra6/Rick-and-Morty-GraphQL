import React, {useState} from 'react';
import Card from './Card';
import {Animated, FlatList, Text} from 'react-native';
import {LoadingStyled} from '../../../components/Loading.styled';
import {Colors} from '../../../assets/colors/colors';
import {EmptyList} from './EmptyList';
import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';
import View = Animated.View;
import {CentralizedContainer} from '../../../components/CentralizedContainer.styled';
import {TextStyled} from '../../../components/Text.styled';

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
      onEndReachedThreshold={0.5}
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
        hasListFinished || data.length < NUMBER_OF_ITEMS_PER_PAGE ? (
          data.length > 0 ? (
            <CentralizedContainer>
              <TextStyled>No more data to load</TextStyled>
            </CentralizedContainer>
          ) : null
        ) : (
          <LoadingStyled color={Colors.secondary} />
        )
      }
      ListEmptyComponent={
        <EmptyList title={'Ops!'} message={'No character found.'} />
      }
    />
  );
}
