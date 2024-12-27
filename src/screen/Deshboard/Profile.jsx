import {
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import Background from '../../components/Background';
  import HeaderComp from '../../components/HeaderComp';
  import Imagepath from '../../constants/Imagepath';
  import LinearGradient from 'react-native-linear-gradient';
  import { COLORS } from '../../styles/colors';
  import TextCompo from '../../components/TextCompo';
  
  const GRADIENT_COLORS = {
    primary: ['#5A3885', '#533683', '#503389'],
    button: ['#CA8CF6', '#500A99'],
    secondry:['#452F6D','#46306E','#483373','#3C2B69','#372769',],
  };
  const info=[
    {
        id:1,
        heading:'Punch History',
        leftIcon: Imagepath.PressButton,
        rightIcon: Imagepath.backarrow,
    },
    {
        id: 2,
        heading: 'Leave Management',
        leftIcon: Imagepath.calender,
        rightIcon: Imagepath.backarrow,
      },
      {
        id:3,
        heading:'Project',
        leftIcon: Imagepath.tesk,
        rightIcon: Imagepath.backarrow,
    },
    {
        id: 4,
        heading: 'Payroll',
        leftIcon: Imagepath.Payroll,
        rightIcon: Imagepath.backarrow,
      },
      {
        id: 5,
        heading: 'Meal Management',
        leftIcon: Imagepath.Meal,
        rightIcon: Imagepath.backarrow,
      },
      {
        id: 6,
        heading: 'Employee',
        leftIcon: Imagepath.employee,
        rightIcon: Imagepath.backarrow,
      },
      
      
      
  ]
  const Profile = () => {
    return (
      <Background>
        {/* Profile Header Section */}
      
        <LinearGradient colors={GRADIENT_COLORS.primary} style={styles.headerContainer}
         start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
          <View style={styles.headerContent}>
            {/* Header with Edit Icon */}
            <HeaderComp right={true} RightIcon={Imagepath.Pencil} />
            {/* Profile Information */}
            <View style={styles.profileInfo}>
              {/* Profile Image */}
              <View style={styles.imageContainer}>
                <Image source={Imagepath.usericon} style={{height:'100%',width:'100%'}}/>
              </View>
              {/* Profile Name */}
              <TextCompo children="Jamshed" style={styles.profileName} />
              {/* Profile Role */}
              <TextCompo children="React Native Developer" style={styles.profileRole} />
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
        <View style={{padding:15}}>
        {info.map((item) => (
            <LinearGradient
            colors={GRADIENT_COLORS.secondry}
            
             style={styles.infoCard}>
          <View key={item.id} style={styles.infoCard}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={item.leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.infoText}>{item.heading}</Text>
            <TouchableOpacity style={styles.iconContainerleft}>
              <Image source={item.rightIcon} style={{...styles.icon,height:20,width:20}} />
            </TouchableOpacity>
          </View>
          </LinearGradient>
        ))}
      </View>
        </ScrollView>
      </Background>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#3C206F',
      height: '30%',
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      paddingHorizontal: 20,
    },
    headerContent: {
      paddingTop: Platform.OS === 'android' ? 10 : 0,
    },
    profileInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    //   marginTop: 20,
    },
    imageContainer: {
      height: 80,
      width: 80,
      backgroundColor: COLORS.whiteColor,
      alignSelf: 'center',
      borderRadius: 50,
    },
    profileName: {
      color: COLORS.whiteColor,
      fontWeight: '600',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
    },
    profileRole: {
      color: COLORS.whiteColor,
      fontSize: 14,
      textAlign: 'center',
      marginTop: 5,
    },
    infoSection: {
        padding: 15,
        marginTop: 10,
      },
      infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f4f4f8',
        padding: 3,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
      },
      infoText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.whiteColor,
        fontWeight: '500',
      },
      iconContainerleft: {
        marginTop:3,
        // padding: 5,
        height:40,
        width:40,
        backgroundColor:'#7A2FC9',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
      },
      iconContainer:{
          padding: 5,
      },
      icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        tintColor:COLORS.whiteColor
      },
  });
  