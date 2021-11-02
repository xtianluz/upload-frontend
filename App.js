/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
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
    cropping: false,
    mediaType: 'photo'
  }).then(image => {
    console.log('from image',JSON.stringify(image))
    const jsonPath = JSON.stringify(image.path)
    const jsonName = JSON.stringify(image.modificationDate)
    const jsonImage = JSON.stringify(image)

    var FormData = require('form-data')
    var formData = new FormData()
    // formData.append('fieldname', 'img')
    // formData.append('path', image.path)
    // formData.append('originalname', 'testingImage')
    // formData.append('image', {
    //   uri: jsonImage,
    //   name: jsonName,
    //   type: 'image/jpeg'
    // })
    // formData.append('image', {uri: image.path, name: 'testing123', type: 'image/jpeg'})
    formData.append('image', jsonPath)

    // var config = {
    //   headers: {"Content-Type": "multipart/form-data"}
    // }

    // axios
    //   .post('http://10.0.2.2:5000/uploads',formData, config)
    //   .then((res) => {
    //     console.log(res)
    //   })
      
    axios({
      method: 'post',
      url: 'http://10.0.2.2:5000/uploads',
      data: formData,
      headers: {"Content-Type": "multipart/form-data"}
    }).then(response => {
      console.log('from response', response)
    }).catch(err => {
      console.log('from axios',err)
    })  

    // Alert.alert('Ayos!','')
  }).catch(err => {
    console.log('from picker', err)
  })
};

const clickAxios = () => {
  axios.get('http://10.0.2.2:5000/api/users')
  .then((res) => {
    console.log(JSON.stringify(res.data))
  }).catch((err) => {
    console.log(err)
  })
}

const App = () => {  

  return (
    <SafeAreaView>
      <View>
        <Button title='click me' onPress={clickHandler} />
        <Button title='click axios' onPress={clickAxios} />
      </View>
    </SafeAreaView>
  );
};


export default App;
