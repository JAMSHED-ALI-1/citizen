import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import HeaderComp from '../../components/HeaderComp'
import { COLORS } from '../../styles/colors'

const Shere = () => {
  return (
    <Background>
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,color:COLORS.whiteColor}}>Comming Soon</Text>

     </View>

    </Background>
  )
}

export default Shere

const styles = StyleSheet.create({})