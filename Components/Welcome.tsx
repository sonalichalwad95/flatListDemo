import {View, Text} from 'react-native';
import React from 'react';

export default function Welcome() {
  return (
    <View style={{flex: 1, backgroundColor: '#ffb6c1'}}>
      <Text
        style={{
          padding: 100,
          fontStyle: 'italic',
          fontSize: 40,
          fontWeight: 'bold',

          //   alignSelf: 'center',
          textAlign: 'center',
          alignContent: 'center',
        }}>
        Welcome to your page
      </Text>
    </View>
  );
}
