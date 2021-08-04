
import  React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Linking from 'expo-linking';
import Hyperlink from 'react-native-hyperlink'
import HTML from 'react-native-render-html';

import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
} from 'date-fns';
export default function reddit({ navigation }) {
  const [dataSource, setDataSource] = useState(0);
  useEffect(() => {
    fetch("https://newworldfans.com/api/v1/dev_tracker?source=reddit") 
    .then(response => response.json())
    .then((responseJson)=> {
      setDataSource(responseJson.dev_posts) 
     })
    .catch(error=>console.log(error)) //to catch the errors if any
  });
  
     
  const renderItem = ({ item }) => {
    const firstDate = parseISO(item.created_at);
    const formattedDate = format(
      firstDate, 
      " MMMM'/'dd'/'yyyy 'at' HH:mm "
    );
    return (
  <View style={{paddingTop: 20, alignItems:'center'}}>
  <Text style={{color:'white', paddingBottom: 10}}>{item.content}</Text>    
  <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius:1}} onPress={() => {navigation.navigate('post', {item: item.source_url});}}>
 <Text style={{color:'white', fontSize:30}}>View post</Text>
</TouchableOpacity>
<Text style={{color:'white', paddingTop: 10}}>{formattedDate}</Text>
<Hyperlink linkDefault={ true }>
  <Text style={ { color: 'yellow', paddingBottom:10, paddingTop:10 } }>
  {item.source_url}
  </Text>
</Hyperlink>

</View>
    );
  };
     return(
      <View style={{backgroundColor:'black', alignItems:'center', fontSize: 50}}>
      <Text style={{color:'white', paddingTop: 10, fontSize: 50}}>News</Text>
      <FlatList
      padding ={30}
         data={dataSource}
         renderItem={renderItem}
         ItemSeparatorComponent={()=>
          <View style={{height:1, backgroundColor: '#f7f7f7'}} 
      />}
       />
      
     </View>
     )
}

