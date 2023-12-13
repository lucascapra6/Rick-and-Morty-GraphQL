import React from 'react';
import {Text} from 'react-native';
import {Sizes} from '../../../assets/sizes/sizes';
import {CentralizedContainer} from '../../../components/CentralizedContainer.styled';
import {TextStyled} from '../../../components/Text.styled';
import {Weights} from '../../../assets/weights/weights';

type EmptyListProps = {
  title: string;
  message: string;
};
export function EmptyList({title, message}: EmptyListProps) {
  return (
    <CentralizedContainer>
      <TextStyled size={Sizes.large} weight={Weights.bold}>
        {title}
      </TextStyled>
      <TextStyled>{message}</TextStyled>
    </CentralizedContainer>
  );
}
