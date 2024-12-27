import { StyleSheet, Text, View,SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import HeaderComp from '../../components/HeaderComp'
import Imagepath from '../../constants/Imagepath'
import TextCompo from '../../components/TextCompo'
import { COLORS } from '../../styles/colors'
import LinearGradient from 'react-native-linear-gradient'
import Card from '../../components/Card'


const cardinfo=[
    {
        title: 'Google Map API',
        description: 'Web APIs, Maps Embed API. Add a Google Map to your site.',
        dueDate: '28 Jan 2023',
        progress: 70,
        members: 4,
      },
      {
        title: 'Intercom Chatbot UI Design',
        description: 'Intercom is the only complete Customer Service solution.',
        dueDate: '28 Jan 2023',
        progress: 70,
        members: 4,
      },
     
]


const DayTime = [
    { id: 1, day: 'SUN', date: '10' },
    { id: 2, day: 'MON', date: '11' },
    { id: 3, day: 'TUE', date: '12' },
    { id: 4, day: 'WED', date: '13' },
    { id: 5, day: 'THU', date: '14' },
    { id: 6, day: 'FRI', date: '15' },
    { id: 7, day: 'SAT', date: '16' },
    { id: 8, day: 'SUN', date: '17' },
    { id: 9, day: 'MON', date: '18' },
    { id: 10, day: 'TUE', date: '19' },
    { id: 11, day: 'WED', date: '20' },
];

const GRADIENT_COLORS = {
    primary: ['#452F6D','#46306E','#483373','#3C2B69','#372769',],
    button: ['#CA8CF6','#500A99' ,]
  };
const DateTime = ({ activeDate, setActiveDate }) => {
    return (
        <ScrollView style={styles.daytimelist} horizontal showsHorizontalScrollIndicator={false}>
            {DayTime.map((value, index) => (
                <TouchableOpacity key={index} style={[
                    styles.dayItem,
                    // activeDate === value.id && { backgroundColor: '#3D2D5C', }, // Conditional background color
                ]}
                onPress={()=>setActiveDate(value.id)}>
                   {activeDate === value.id ? (
                        <LinearGradient
                            colors={['#432E6C', '#442E6C', '#39296B']}
                            style={styles.gradientItem}
                        >
                            <Text style={styles.dayText}>{value.day}</Text>
                            <Text style={styles.dateText}>{value.date}</Text>
                        </LinearGradient>
                    ) : (
                        <View style={styles.dayItem}>
                            <Text style={styles.dayText}>{value.day}</Text>
                            <Text style={styles.dateText}>{value.date}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};
const TodayTaskText=()=>{
return(
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>


    <Text style={styles.heading}>Today Task </Text>
    <View style={{...styles.leftWekly,  left:10,padding:5}}>
                <TouchableOpacity style={{flexDirection:'row',paddingHorizontal:10}}>

<TextCompo children={'All '} style={{...styles.noremaltext,color:COLORS.gray3}}/>
<Image source={Imagepath.Fiter} style={{...styles.dropIcon,tintColor:COLORS.gray3}}/>
</TouchableOpacity>
                </View>
   
                </View>

<LinearGradient
        colors={GRADIENT_COLORS.button}
        style={styles.buttonGradient}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      >
        <View style={styles.buttonContent}>
            {/* <Image source={Imagepath.PressButton} style={{height:40,width:40,tintColor:COLORS.whiteColor}}/> */}
            {/* <Text style={styles.buttonText}>
              {isPunchedIn ? 'PUNCH OUT' : 'PUNCH IN'}
            </Text> */}
              <TouchableOpacity style={{flexDirection:'row',padding:10,borderRadius:20}}>

<TextCompo children={'Add Task '} style={styles.noremaltext}/>
{/* <Image source={Imagepath.DropdownIcon} style={styles.dropIcon}/> */}
<View style={{height:20,width:20,backgroundColor:'white',borderRadius:50,alignItems:'center',left:10}}>
<Text style={{fontSize:18,bottom:2}}>+</Text>
</View>
</TouchableOpacity>
        </View>
      </LinearGradient>
</View>
)
}

const Tasklist = () => {
    const [activeDate, setActiveDate] = useState(1);
  return (
    <Background>
        <SafeAreaView style={{...styles.container}}>
            <HeaderComp title={'My Task'} left={true} right={true} RightIcon={Imagepath.searchIcon}/>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <TouchableOpacity style={{flexDirection:'row',}}>

                <TextCompo children={'April 2023 '} style={styles.heading}/>
                <Image source={Imagepath.DropdownIcon} style={{...styles.dropIcon,top:5,tintColor:COLORS.gray3}}/>
                </TouchableOpacity>
                <View style={{...styles.leftWekly,}}>
                <TouchableOpacity style={{flexDirection:'row',padding:5,borderRadius:30}}>

<TextCompo children={'Weekley '} style={{...styles.noremaltext,color:COLORS.gray3}}/>
<Image source={Imagepath.DropdownIcon} style={{...styles.dropIcon,tintColor:COLORS.gray3}}/>
</TouchableOpacity>
                </View>
            </View>
<DateTime  activeDate={activeDate} setActiveDate={setActiveDate}/>
<View style={{marginTop:15}}>

<TodayTaskText/>
</View>
<View style={{marginTop:15}}>

<Card cardinfo={cardinfo}/>

</View>
        </SafeAreaView>

    </Background>
  )
}

export default Tasklist

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        padding: 10,
      },
      noremaltext:{
fontSize:14,
color:COLORS.whiteColor
      },
      dropIcon:{
        height:20,
        width:20,
        tintColor:COLORS.whiteColor 
      },
      leftWekly:{
        borderWidth:2,
        borderColor:COLORS.gray2,
        padding:2,
        borderRadius:20,
      
      },
      daysScroll: {
        flexDirection: 'row',
      },
      daytimelist: {
        marginTop: 10,
    },
    touchableItem: {
        marginRight: 20,
    },
    dayItem: {
        alignItems: 'center',
        // backgroundColor: '#3D2D5C',
        padding: 10,
        borderRadius: 10,
        width: 60,
    },
    gradientItem: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        width: 60,
    },
    dayText: {
        color: COLORS.whiteColor,
        fontSize: 12,
        marginBottom: 5,
    },
    dateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonGradient:{
        borderRadius:20,
        paddingHorizontal:15,
        
    },
    heading:{
        fontSize:18,
        fontWeight:'700',
        color:COLORS.whiteColor,
        
    }

})