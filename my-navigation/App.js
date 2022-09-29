 import React from 'react'
 import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
 
import AppPrincipal from './src/pages/AppPrincipal';
import List from './src/pages/List';

const Tab = createBottomTabNavigator()
 
function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='AppPrincipal' component={ AppPrincipal}/>
    </Tab.Navigator>
  )
}
 

 export default function app(){
  return(
    <View>
         <Text>oi</Text>
      </View>
    
     
  )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
   
    
});
