
import React from 'react';
import {
    SafeAreaView,
    FlatList,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useState } from 'react';





const Test = ( {navigation}) => {
  let [count,setCount] = useState(0)
  let [state,setState] = useState(
     [
      {
          id: 'bc7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'zero Item',
        },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '777777777777',
        title: "third"
      },
      
    ]
  )
  
    
      let Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title} </Text>

        </View>
      );
      let renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    console.log("===>",state.title,state.id)


    
    
  return (
    <View style={{ flex: 1, backgroundColor:'gray' }} >
      
    
    <SafeAreaView style={styles.container}>
      
      <Button title="Edit" onPress={()=>{console.log("haye g")}} />
      <Button onPress={() => navigation.navigate('Camera')} title="Open Camera" />
      {/* <Button onPress={() => navigation.navigate('builder')} title="Open Camera" /> */}



      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      

      
      
    </SafeAreaView>


   <View style={{flex:1}}>
     
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>{count}</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
   <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
       <Text style={{flex:1,fontSize:24, textAlign:'center'}}>Hy</Text>
    </View> 
   
   
    
  </View>  
  )


};

const styles = StyleSheet.create({
 
});

export default Test;
