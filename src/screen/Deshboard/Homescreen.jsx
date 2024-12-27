import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialcommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
import Background from '../../components/Background';
import TextInputComp from '../../components/TextInputComp';
import TextCompo from '../../components/TextCompo';
import Imagepath from '../../constants/Imagepath';
import { COLORS } from '../../styles/colors';
import { Button } from '@react-navigation/elements';
import CircularProgress from 'react-native-circular-progress-indicator';

const GRADIENT_COLORS = {
  primary: ['#452F6D','transparent','#46306E','#483373','#3C2B69','#372769', ],
  button: ['#6A22B6','#500A99', '#46306E', ]
};

const HomeHeader = ({ userName }) => (
  <>
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image source={Imagepath.usericon} style={styles.profilePic} />
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="grid" size={18} color={COLORS.whiteColor} />
      </TouchableOpacity>
    </View>
    <Text style={styles.greetingText}>Hi {userName}</Text>
  </>
);

const AttendanceHeader = () => (
  <View style={styles.attendanceHeader}>
    <TextCompo 
      children={'Attendance.'} 
      style={styles.attendanceTitle}
    />
    <View style={styles.moreOptionsButton}>
      <TextCompo children={'...'} style={styles.moreOptionsText} />
    </View>
  </View>
);

const PunchInSection = ({isPunchedIn, onPunchInPress, workingTime}) => (
  <LinearGradient colors={GRADIENT_COLORS.primary} style={styles.punchInContainer}
  start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{workingTime}</Text>
      <Text style={styles.dateText}>
        {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </Text>
    </View>

    

    <LinearGradient
          colors={['#CA8CF6', '#CB97FE','#996AD9','#6737BE','#5323B1']}
          start={{ x: 1, y:0}}
          end={{ x: 0, y: 1 }}
          style={styles.linearGradient}
        >
    <TouchableOpacity style={styles.punchButton}
     onPress={onPunchInPress}>

        <View style={{padding:5,backgroundColor:'#322867',borderRadius:100}}>

        
      <LinearGradient
        colors={GRADIENT_COLORS.button}
        style={styles.buttonGradient}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      >
        <View style={styles.buttonContent}>
            <Image source={Imagepath.PressButton} style={{height:40,width:40,tintColor:COLORS.whiteColor}}/>
            <Text style={styles.buttonText}>
              {isPunchedIn ? 'PUNCH OUT' : 'PUNCH IN'}
            </Text>
        </View>
      </LinearGradient>
</View>


    </TouchableOpacity>
    </LinearGradient>
   
    <View style={styles.locationContainer}>
      <MaterialcommunityIcon name="google-maps" size={20} color={COLORS.whiteColor}/>
      <Text style={styles.locationText}>Location: You are in Office reach</Text>
    </View>
  </LinearGradient>
);

const AttandanceSection=({checkInTime, workingHours})=>{
    return (
        <LinearGradient
        colors={GRADIENT_COLORS.primary}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
         style={styles.attandancecontainer}>
          {/* Check In */}
          <View style={styles.infoBlock}>
            <Ionicons name="time-outline" size={24} color="#69D0FF" />
            <Text style={styles.timeText}>{checkInTime}</Text>
            <Text style={styles.labelText}>Check In</Text>
          </View>
    
          {/* Check Out */}
          <TouchableOpacity style={styles.infoBlock}>
            <MaterialIcons name="logout" size={24} color="#FFA569" />
            <Text style={styles.timeText}>--:--</Text>
            <Text style={styles.labelText}>Check Out</Text>
          </TouchableOpacity>
    
          {/* Working Hours */}
          <View style={styles.infoBlock}>
            <Ionicons name="time" size={24} color="#697BFF" />
            <Text style={styles.timeText}>{workingHours}</Text>
            <Text style={styles.labelText}>Working Hrs</Text>
          </View>
        </LinearGradient>
      );
}
const Homescreen = () => {
    const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [checkInTime, setCheckInTime] = useState('--:--');

  useEffect(() => {
    let timerInterval;
    if (isPunchedIn) {
      timerInterval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isPunchedIn]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePunchInOut = () => {
    if (!isPunchedIn) {
      const now = new Date();
      setStartTime(now);
      setCheckInTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
      setElapsedTime(0);
    }
    setIsPunchedIn(!isPunchedIn);
  };

  return (
    <Background>
      <View style={styles.container}>
        <HomeHeader userName="Jamshed" />
        <ScrollView>
          <TextInputComp />
          <AttendanceHeader />
          <PunchInSection 
            isPunchedIn={isPunchedIn}
            onPunchInPress={handlePunchInOut}
            workingTime={formatTime(elapsedTime)}
          />
          <AttandanceSection 
            checkInTime={checkInTime}
            workingHours={formatTime(elapsedTime)}
          />
       
        </ScrollView>
       
      
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationBadge: {
    position: 'absolute',
    top: 25,
    right: -10,
    backgroundColor: '#FF4D6D',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: COLORS.whiteColor,
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#403673',
    borderRadius: 50,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.whiteColor,
    paddingBottom: 20,
  },
  attendanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
  },
  attendanceTitle: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontWeight: '600',
  },
  moreOptionsButton: {
    height: 30,
    width: 30,
    backgroundColor: '#4B4476',
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#4B4476',
  },
  moreOptionsText: {
    color: COLORS.whiteColor,
  },
  punchInContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    // paddingVertical: '15%',
    borderRadius: 30,
  },
  timeContainer: {
    // alignItems: 'center',
  },
  timeText: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontWeight: '500',
    left:5
  },
  dateText: {
    color: COLORS.whiteColor,
    fontSize: 16,
    marginTop: 2,
  },
  punchButton: {
    width: 150,
    height: 150,
    borderRadius: 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    padding: 20,
    // borderWidth: 2,
    // borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.whiteColor,
    marginLeft: 8,
    fontSize: 14,
  },
  linearGradient: {
    marginTop:10,
    height: 160,
    width: 160,
    borderRadius: 100, 
    alignItems:'center',// <-- Outer Border Radius
    justifyContent:'center',
    
    
  },
  innerContainer: {
    borderRadius: 100, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  attandancecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3C206F', // Card background
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  infoBlock: {
    alignItems: 'center',
  },
 
  labelText: {
    fontSize: 12,
    color: '#BEBEC3',
    marginTop: 2,
  },
 
});

export default Homescreen;