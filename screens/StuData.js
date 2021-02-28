import React  from 'react';
import {useState} from 'react'
import database from '@react-native-firebase/database';

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";





const StuData = ({navigation}) => {
  let [name, setName] = useState("")
  let [mail, setMail] = useState("")
  let [number, setNumber] = useState("")
  let [marks, setMarks] = useState("")

  function UserData(){
    let user = {
      id: " ",
      name,
      mail,
      number,
      marks,
  }
    console.log("name",user)
    if(user.name == '' || mail == "" || number =="" || marks == "" ){
      alert("Enter Correct Data")
      

    }else{
      database().ref('/').child('stuData').push(user)
      setName("")
      setMail("")
      setNumber("")
      setMarks("")
    }



  }




  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        
        <Image style={styles.logo} source={require('./asset/logo.png')} />

        <Item style={{margin:10,}} rounded>
            <Input value={name} keyboardType="default" onChangeText={(Text) => setName(Text)} textAlign={'center'} placeholder='Enter Your Name'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={mail} keyboardType='email-address' onChangeText={(Text) => setMail(Text)} textAlign={'center'} placeholder='Enter Email'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={number} keyboardType='phone-pad' maxLength={11} onChangeText={(Text) => setNumber(Text)} textAlign={'center'} placeholder='Enter Contact No.'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={marks} keyboardType='numeric' maxLength={4} onChangeText={(Text) => setMarks(Text)} textAlign={'center'} placeholder='Enter Marks'/>
          </Item>
        
        <Button onPress={()=>UserData()} style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> Submit </Text>
        </Button>

        <Button onPress={() => navigation.navigate('jobs')} style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> See Vacancies </Text>
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

export default StuData;
