import React from 'react';
import { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";





const AdminLogin = ({navigation}) => {
  const email = "admin@ymail.com";
  const pass = "123"

  let [mail, setMail] = useState('')
  let [password, setPassword] = useState("")

  function login(){
    console.log("login",mail,password)
    if (mail == email && password == pass ){
    navigation.navigate('AdminHome')
    }
    else{
      alert("email or password incorrect")
    }
  }
  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        
        <Image style={styles.logo} source={require('./asset/logo.png')} />

        <Item style={{margin:10}} rounded>
            <Input value={mail} onChangeText={(Text) => setMail(Text)} textAlign={'center'} placeholder='Enter Email'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={password} onChangeText={(Text) => setPassword(Text)} textAlign={'center'} placeholder='Enter Password'/>
          </Item>
        
        <Button  onPress={()=>login()}  style={{ margin: 5, }} block>
          <Text  style={{ color: 'white', }}> Log in </Text>
        </Button>

        <Text style={{ color: 'black', fontSize:20 }}> Email: admin@ymail.com </Text>
        <Text style={{ color: 'black', fontSize:20 }}> Password: 123 </Text>

        
        {/* <Button  style={{ margin: 5, width: '40%' , alignSelf:'center' }} block>
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

export default AdminLogin;
