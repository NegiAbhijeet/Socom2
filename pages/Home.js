import * as React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text>Home!</Text>
    </View>
  );
}