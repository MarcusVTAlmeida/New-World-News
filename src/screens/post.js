import * as React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
var {width, height} = Dimensions.get('window')
export default function post({ route, navigation }) {
    const { item } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black' }}>  
        <WebView
        source={{uri: item}}
        style={{ width: width, height: height }}/>          
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius:1}} onPress={() => navigation.goBack()}>
 <Text style={{color:'white', fontSize:30}}>Go back</Text>
</TouchableOpacity>
      </View>
    );
  }