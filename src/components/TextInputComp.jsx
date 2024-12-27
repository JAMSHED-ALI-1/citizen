import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../styles/colors'
import Imagepath from '../constants/Imagepath'

const TextInputComp = () => {
  const [text,settext]=useState('')
  const handlechange=(text)=>{
    settext(text)
  }
  return (
    <View style={styles.container}>
      <Image source={Imagepath.searchIcon} style={styles.searchicon}/>
     <TextInput placeholder='Search'
     style={{height:'100%',width:'100%',color:COLORS.whiteColor}}
     placeholderTextColor={COLORS.gray3}
     value={text}
     
     onChangeText={handlechange}/>
    </View>
  )
}

export default TextInputComp

const styles = StyleSheet.create({
  container:{
    height:50,
    // borderWidth:0.5,
    // borderColor:'red',
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
gap:30,
backgroundColor:'#403673',
shadowColor:'#403673',
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    // justifyContent:'center'
  },
  searchicon:{
    left:22,
height:22,
width:22,

resizeMode:'contain',tintColor:'#E2E1EA'
  }
})