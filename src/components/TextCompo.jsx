import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize'
import { COLORS } from '../styles/colors'



const TextCompo = ({
    text = '',
    style = {},
    children,
    ...props
}) => {
  return (
   <Text style={{...style.textstyle,...style}}
   {...props}
   >{children}</Text>

  )
}

export default TextCompo

const styles = StyleSheet.create({
    textstyle:{
        fontSize:moderateScale(16),
        color:COLORS.blackColor,
// textAlign:'left',
    }
})