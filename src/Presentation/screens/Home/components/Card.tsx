import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';
import {Animated, Image, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Easing} from 'react-native-reanimated';
import {TextStyled} from '../../../components/Text.styled';
import {Sizes} from '../../../assets/sizes/sizes';
import {RowContainer} from '../../../components/RowContainer.styled';
import {Weights} from '../../../assets/weights/weights';
import {ImageStyled} from '../../../components/Image.styled';

type CardProps = {
  character: CharacterBaseInfoModel;
};
const CardContainer = styled(Animated.View)`
  padding: 10px;
  align-self: center;
  align-items: center;
  background-color: #9acd32;
  border-radius: 10px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  margin: 5px;
`;

function Card({character}: CardProps) {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(flipAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [flipAnimation]);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['180deg', '90deg', '0deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };
  return (
    <CardContainer style={[frontAnimatedStyle]}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageStyled
          source={{uri: character.image}}
          width={150}
          height={150}
          blurRadius={1}
        />
        <TextStyled
          numberOfLines={1}
          size={Sizes.small}
          style={{maxWidth: 150}}>
          {character.name}
        </TextStyled>
        <TextStyled
          size={Sizes.extraSmall}
          weight={Weights.normal}
          style={{maxWidth: 150}}>
          {character.gender}
        </TextStyled>
        <TextStyled
          numberOfLines={1}
          ellipsizeMode={'tail'}
          size={Sizes.extraSmall}
          weight={Weights.normal}
          style={{maxWidth: 150}}>
          {character.species}
        </TextStyled>
      </TouchableOpacity>
    </CardContainer>
  );
}

export default memo(Card);
