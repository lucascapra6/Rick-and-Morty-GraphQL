import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Easing} from 'react-native-reanimated';

type CardProps = {
  character: CharacterBaseInfoModel;
};
const CardContainer = styled(Animated.View)`
  flex: 1;
  padding: 10px;
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
      <TouchableOpacity>
        <Text>{character.name}</Text>
        <Text>{character.gender}</Text>
        <Text>{character.species}</Text>
        <Image
          style={{height: 150, width: 150}}
          source={{uri: character.image}}
          blurRadius={1}
        />
      </TouchableOpacity>
    </CardContainer>
  );
}

export default memo(Card);
