import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bottomtab from './Bottomtab';
const Stacktab = () => {
    const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      
<Stack.Navigator options={{
// headerShown:false,

}}>
    <Stack.Screen  name="Bottomtab" component={Bottomtab} options={{ headerShown:false}} />
    {/* <Stack.Screen  name="Homescreen" component={Homescreen} options={{ title: 'Overview' }} />  */}
</Stack.Navigator>
    </NavigationContainer>
     
  )
}

export default Stacktab

const styles = StyleSheet.create({})