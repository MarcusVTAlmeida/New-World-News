
import  React, {useEffect, useState} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

import Hyperlink from 'react-native-hyperlink'


import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
} from 'date-fns';
export default function website({ navigation }) {
  const [dataSource, setDataSource] = useState(0);
  useEffect(() => {
    fetch("https://newworldfans.com/api/v1/dev_tracker?source=website-news") 
    .then(response => response.json())
    .then((responseJson)=> {
      setDataSource(responseJson.dev_posts) 
     })
    .catch(error=>console.log(error))
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
  <Image style={{height: 200, width: '100%', paddingBottom: 10}} source={{uri:`${item.image_url}` }} />  
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

