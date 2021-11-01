/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';


const clickHandler = () => {
  console.warn('clicked')
   
}

const App = () => {
  

  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button title='click me' onPress={clickHandler}>Click</Button>
      </View>
    </SafeAreaView>
  );
};


export default App;
