import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Foundation } from '@expo/vector-icons'; 
import website from './src/screens/website';  
import twitter from './src/screens/twitter';
import reddit from './src/screens/reddit';
import post from './src/screens/post'

const WebsiteStack = createStackNavigator();
function WebsiteStackScreen() {
 return (
   <WebsiteStack.Navigator>
    <WebsiteStack.Screen name="website" component={website}  options={{ title: ''}}/>      
    <WebsiteStack.Screen name="post" component={post} options={{ title: ''}}/>
   </WebsiteStack.Navigator>
  );
}
const TwitterStack = createStackNavigator();
function TwitterStackScreen() {
  return (
    <TwitterStack.Navigator>
       <TwitterStack.Screen name="twitter" component={twitter} options={{ title: ''}}/>
       <TwitterStack.Screen name="post" component={post} options={{ title: ''}}/>
    </TwitterStack.Navigator>
  );
}
const RedditStack = createStackNavigator();
function RedditStackScreen() {
  return (
    <RedditStack.Navigator>
       <RedditStack.Screen name="reddit" component={reddit} options={{ title: ''}}/>
       <RedditStack.Screen name="post" component={post} options={{ title: ''}}/>
    </RedditStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return ;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
     <Tab.Screen name="website" component={WebsiteStackScreen}   options={{ title: 'Site', tabBarIcon: () => (
           <Foundation name="web" size={24} color="black" />
          ), }}/>
     <Tab.Screen name="twitter" component={TwitterStackScreen} options={{ title: 'Twitter', tabBarIcon: () => (
           <Foundation name="social-twitter" size={24} color="black" />
          ), }}/>
     <Tab.Screen name="reddit" component={RedditStackScreen} options={{ title: 'Reddit', tabBarIcon: () => (
          <Foundation name="social-reddit" size={24} color="black" />
          ), }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}
