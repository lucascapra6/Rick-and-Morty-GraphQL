import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps, View} from 'react-native';

export default function Loading(props: ActivityIndicatorProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator {...props} />
    </View>
  );
}
