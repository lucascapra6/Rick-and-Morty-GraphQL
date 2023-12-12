import React from 'react';
import {Text, View} from 'react-native';
import {Sizes} from '../../../assets/sizes/sizes';
import {Weights} from '../../../assets/weights/weights';

type EmptyListProps = {
  title: string;
  message: string;
};
export function EmptyList({title, message}: EmptyListProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: Sizes.large, fontWeight: Weights.bold}}>
        {title}
      </Text>
      <Text>{message}</Text>
    </View>
  );
}
