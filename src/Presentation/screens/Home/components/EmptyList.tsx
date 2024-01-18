import React from 'react';
import {Text} from 'react-native';
import {Sizes} from '../../../assets/sizes/sizes';
import {FlexCentralizedContainer} from '../../../components/FlexCentralizedContainer.styled';
import {TextStyled} from '../../../components/Text.styled';
import {Weights} from '../../../assets/weights/weights';
import {Colors} from '../../../assets/colors/colors';

type EmptyListProps = {
  title: string;
  message: string;
};
export function EmptyList({title, message}: EmptyListProps) {
  return (
    <FlexCentralizedContainer style={{height: 200}} testID={'empty-list'}>
      <TextStyled
        color={Colors.primary}
        size={Sizes.large}
        weight={Weights.bold}>
        {title}
      </TextStyled>
      <TextStyled color={Colors.primary}>{message}</TextStyled>
    </FlexCentralizedContainer>
  );
}
