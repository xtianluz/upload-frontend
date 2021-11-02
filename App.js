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
  Alert,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';



const clickHandler = () => {
  ImagePicker.openPicker({
    width: 500,
    height: 500,
    cropping: true,
    mediaType: 'photo'
  }).then(image => {
    console.warn(image.path)
    alert('Successful')
  }).catch(err => {
    console.warn(err)
  })
}

const App = () => {
  

  return (
    <SafeAreaView>
      <View>
        <Button title='click me' onPress={clickHandler}>Click</Button>
      </View>
    </SafeAreaView>
  );
};


export default App;
