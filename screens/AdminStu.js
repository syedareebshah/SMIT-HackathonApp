import React from 'react';
import { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';



import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";


const AdminStu = ({navigation}) => {
  let [data, setdata] = useState([])


  useEffect(()=>{
    database().ref('stuData').once('value').then(snapshot =>{
      let dataRef = Object.values(snapshot.val());
      setdata(dataRef)
    })
},[])
console.log("hello",data)
 var x = [1,2,3,4,5,6]


  return (
    <ScrollView style={styles.main}>
      {data.map((v, i) => {
        return (
          <View key={i}>

            <Text style={styles.item}>Name: {v.name} {"\n"}Phone: {v.number} {"\n"}Email: {v.mail} {"\n"}Marks: {v.marks}</Text>
            
            
          </View>
        )
      })}
      
      
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    fontSize:18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default AdminStu;