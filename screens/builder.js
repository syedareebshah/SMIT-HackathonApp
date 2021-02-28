import React from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";





const builder = ({navigation}) => {
  function logedIn(){
    navigation.navigate('StuData')
  }
  let fb_login= async ()=>{

    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  auth().signInWithCredential(facebookCredential)
  .then((user) => {
    console.log("ok",user)
    logedIn()
  })
  .catch((err) => {
    alert("Something went wrong")
  })

  }
  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        
        <Image style={styles.logo} source={require('./asset/logo.png')} />

        {/* <Item style={{margin:10}} rounded>
            <Input placeholder='Enter Email'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input placeholder='Enter Password'/>
          </Item> */}
        
        <Button onPress={() =>fb_login() }  style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> Log in with Facebook </Text>
        </Button>

        {/* <Text style={{ color: 'black', fontSize:20 }}> Don't have account? Sign Up </Text> */}
        
        {/* <Button onPress={()=>}  style={{ margin: 5, width: '40%' , alignSelf:'center' }} block>
          <Text style={{ color: 'white', }}>Sign up </Text>
        </Button> */}
        

      </View>
      
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  one: {
    paddingTop: 70,
    alignItems: 'center',
    flex: 1,
    fontSize: 42,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default builder;
