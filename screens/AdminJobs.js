import React from 'react';
import { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';



import {
    TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button,Input,Item } from "native-base";


const AdminJobs = ({navigation}) => {
  let [data, setdata] = useState([])
 function onLongPress(){
    alert("Deleted")
 }

  useEffect(()=>{
    database().ref('Jobs').once('value').then(snapshot =>{
      let dataRef = Object.values(snapshot.val());
      setdata(dataRef)
    })
},[])

//  var x = [1,2,3,4,5,6]

console.log("hello",data)

  return (
    <ScrollView style={styles.main}>
      {data.map((v, i) => {
        return (
          <View key={i}>
               <TouchableOpacity onPress={()=>onLongPress()}>

            <Text style={styles.item}>Post: {v.title} {"\n"}Salary: {v.salary} {"\n"}Job Description: {v.desc} {"\n"}Company: {v.comp}</Text>
            
            </TouchableOpacity>
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

export default AdminJobs;
