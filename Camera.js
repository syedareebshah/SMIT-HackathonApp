
import React  from 'react';
import {useRef} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';





const Camera = () => {

  // function changer() {
  //   type === Camera.Constants.type.front
  //   ? Camera.Constants.type.back
  //   : Camera.Constants.type.front
  //   console.log("hahaha")
  // }
  const takePicture= async () => {
    const options = { quality: 0.5, base64: true };
    let data = await camera.current.takePictureAsync(options)
    console.log("data===>",data.uri)
  
  };

  const camera = useRef(null)

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    }}>
      <RNCamera ref={camera} style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }} type={RNCamera.Constants.Type.front} />

      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=> takePicture()} style={{
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 15,
          paddingHorizontal: 20,
          alignSelf: 'center',
          margin: 20,
        }}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
};






export default Camera;
