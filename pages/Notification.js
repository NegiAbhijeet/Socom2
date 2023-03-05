import * as React from 'react';
import { Text, View} from 'react-native';
import Header from './Header';

export default function Notification({ navigation }) {
    return (

        <View style={{  }}>
        <Header/>
        <Text>Notification!</Text>
      </View>
    );
  }