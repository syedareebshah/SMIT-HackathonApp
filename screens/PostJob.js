import React from 'react';
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





const PostJob = ({navigation}) => {

  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")
  let [salary, setSal] = useState("")
  let [comp, setComp] = useState("")

  function UserData(){
    let user = {
      id: " ",
      title,
      desc,
      salary,
      comp,
  }
    console.log("Jobs",user)
    if(user.title == "" || user.desc == "" || user.salary =="" || user.comp ==""){
      alert("Invalid Entry")
    }else
    {
      database().ref('/').child('Jobs').push(user)
      setTitle("")
      setDesc("")
      setSal("")
      setComp("")      
    }


  }
  
  return (
    <ScrollView style={styles.main}>
      <View style={styles.one}>
        
        <Image style={styles.logo} source={require('./asset/logo.png')} />

        <Item style={{margin:10,}} rounded>
            <Input value={title} onChangeText={(Text) => setTitle(Text)} textAlign={'center'} placeholder='Enter Job Title'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={desc} onChangeText={(Text) => setDesc(Text)} textAlign={'center'} placeholder='Enter Job Description'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={salary} keyboardType='numeric' onChangeText={(Text) => setSal(Text)} textAlign={'center'} placeholder='Enter Salary'/>
          </Item>
          <Item style={{margin:10}} rounded>
            <Input value={comp} onChangeText={(Text) => setComp(Text)} textAlign={'center'} placeholder='Enter Company Name'/>
          </Item>
          
        
        <Button onPress onPress={()=>UserData()}  style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> Post Job </Text>
        </Button>

        <Button onPress={() => navigation.navigate('Profiles')} style={{ margin: 5, }} block>
          <Text style={{ color: 'white', }}> Visit Profiles </Text>
        </Button>


        {/* <Text style={{ color: 'black', fontSize:20 }}> Don't have account? Sign Up </Text>
        
        <Button onPress={() => navigation.navigate('Home')} style={{ margin: 5, width: '40%' , alignSelf:'center' }} block>
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

export default PostJob;
