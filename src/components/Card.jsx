import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../constants/Imagepath';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../styles/colors';
import CircularProgress from 'react-native-circular-progress-indicator';
const ProgressCircle = ({ percentage }) => (
  <View style={{height:80}}>


  <CircularProgress
  value={70}
  radius={40}

  activeStrokeColor='#37D5D5'
  inActiveStrokeColor={'#4B6A99'}
  
  duration={200}
  progressValueColor={'#ecf0f1'}
  maxValue={100}
  valueSuffix={'%'}
  titleColor={'white'}
  titleStyle={{fontWeight: 'bold'}}
  inActiveStrokeOpacity={0.5}
  inActiveStrokeWidth={5}
  activeStrokeWidth={5}
/>
</View>
);

const MemberStack = ({ count }) => (
  <View style={styles.memberStack}>
    {[...Array(Math.min(3, count))].map((_, index) => (
      <View
        key={index}
        style={[styles.memberAvatar, { marginLeft: index > 0 ? -10 : 0 }]}
      >
        <Image source={Imagepath.usericon} style={{height:30,width:30,alignSelf:'center'}}/>
        </View>
      
    ))}
    {count > 3 && (
      <View style={[styles.memberAvatar, styles.memberCount, { marginLeft: -10 }]}>
        <Text style={styles.memberCountText}>+{count - 3}</Text>
      </View>
    )}
  </View>
);

const Card = ({ cardinfo }) => {
  const GRADIENT_COLORS = {
    primary: ['#452F6D', '#46306E', '#483373', '#3C2B69', '#372769'],
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {cardinfo.map((task, index) => (
          <LinearGradient
            key={task.id || index}
            colors={GRADIENT_COLORS.primary}
            style={styles.taskCard}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          >
            <View style={styles.taskContent}>
              <Text style={styles.taskCardTitle}>{task.title}</Text>
              <Text style={styles.taskDescription}>{task.description}</Text>
              <View style={styles.taskFooter}>
                <MemberStack count={task.members} />
                <Text style={styles.dueDate}>Due: {task.dueDate}</Text>
              </View>
            </View>
            <View style={{gap:30}}>

            <TouchableOpacity style={styles.menuButton}>
       <Image source={Imagepath.Pencil} style={{height:20,width:25,resizeMode:'contain' ,tintColor:COLORS.whiteColor}}/>
      </TouchableOpacity>
            <ProgressCircle percentage={task.progress || 0} />
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#1A1A1A', // Add a background color to match your theme
  },
  scrollView: {
    // flex: 1,
  },
  scrollViewContent: {
    // padding: 16,

    paddingBottom: 24, // Add extra padding at bottom for last card
  },
  taskCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskContent: {
    flex: 1,
    marginRight: 15,
  },
  taskCardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskDescription: {
    color: '#9586A8',
    fontSize: 14,
    marginBottom: 15,
  },
  taskFooter: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    gap:10
  },
  memberStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#8B6EE5',
    borderWidth: 2,
    borderColor: COLORS.whiteColor,
  },
  memberCount: {
    backgroundColor: '#6E5597',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberCountText: {
    color: 'white',
    fontSize: 12,
  },
  dueDate: {
    color: '#9586A8',
    fontSize: 12,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2D2146',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#8B6EE5',
  },
  progressText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    height:40,width:40,
    backgroundColor: '#403673',
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    left:35
  },
});

export default Card;