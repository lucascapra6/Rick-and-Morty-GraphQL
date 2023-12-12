import {CharacterBaseInfoModel} from '../../../../Domain/models/characterBaseInfoModel';
import {Image, Text, View} from 'react-native';
import React, {memo} from 'react';

type CardProps = {
  character: CharacterBaseInfoModel;
};
function Card({character}: CardProps) {
  console.log(character);
  return (
    <View style={{padding: 10}}>
      <Text>{character.name}</Text>
      <Text>{character.gender}</Text>
      <Text>{character.species}</Text>
      <Image
        style={{height: 150, width: 150}}
        source={{uri: character.image}}
        blurRadius={1}
      />
    </View>
  );
}

export default memo(Card);
