import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";





const CompLog = ({navigation}) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        
        <Image style={styles.logo} source={require('./asset/logo.png')} />

        <Item style={{margin:10}} rounded>
            <Input placeholder='Enter Email'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input placeholder='Enter Password'/>
          </Item>
        
        <Button onPress={() => navigation.navigate('PostJob')}  style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> Log in </Text>
        </Button>

        <Text style={{ color: 'black', fontSize:20 }}> Don't have account? Sign Up </Text>
        
        <Button  style={{ margin: 5, width: '40%' , alignSelf:'center' }} block>
          <Text style={{ color: 'white', }}>Sign up </Text>
        </Button>
        

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

export default CompLog;
