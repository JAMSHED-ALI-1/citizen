import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize'
import TextCompo from './TextCompo'
// import Imagepath from '../constants/Imagepath'

const ButtonComp = ({
  title,
  leftIcon,
  rightIcon,
}) => {
  return (
    <TouchableOpacity style={{...styles.container}}>
    {/* icGoogle: require('../assets/images/activeHeart.png'), */}
      {/* <Image source={require('../assets/images/activeHeart.png')} style={{height:30,width:30}}/> */}
       <View style={{...styles.iconcaotainer}}>
{leftIcon?(<Image source={require('../assets/images/search.png')} style={{...styles.icon}}/>):null}

</View>
      
      {
        title?( <TextCompo children={title}></TextCompo>):null
      }
     
     
      <View style={{...styles.iconcaotainer}}>
{rightIcon?(<Image source={require('../assets/images/search.png')} style={{...styles.icon}}/>):null}
      
      </View>

    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  container:{
    height:moderateScale(50),
    backgroundColor:'red',
    borderRadius:30,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20

  },iconcaotainer:{
    // flex:1,
    // alignSelf:'flex-start',
    height:30,
    width:30,
  },
  icon:{
    height:'100%',
    width:'100%',
    resizeMode:'contain'
  }
})