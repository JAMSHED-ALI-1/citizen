// import React from 'react';
// import { StyleSheet, View, Dimensions ,Text, SafeAreaView, StatusBar} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Background = ({ children,style={} }) => {
//   return (
//     <SafeAreaView  style={{flex:1,}}>

  
//     <View style={{...styles.container,...style}}>
//       <LinearGradient
//         colors={[ '#2B1D52',  // Dark purple at top
//             '#36235F',  // Mid purple
//             '#452C75',  // Lighter purple
//             '#2B1D52']}
//         style={styles.gradient}
//       >
//          <StatusBar
//         translucent={true}
//         backgroundColor="transparent"
//         barStyle="light-content" // Change to 'dark-content' for light background
//       />
//         {/* Background Circles for depth effect */}
//         <View style={[styles.circle, styles.circle1]} />
//         <View style={[styles.circle, styles.circle2]} />
//         <View style={[styles.circle, styles.circle3]} />
        
//         {/* Content Container */}
//         <View style={styles.content}>
//      {children}
//         </View>
//       </LinearGradient>
//     </View>
//     </SafeAreaView>
//   );
// };

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     position: 'relative',
//     paddingTop:20
//   },
//   circle: {
//     position: 'absolute',
//     borderRadius: width,
//     backgroundColor: 'rgba(107, 77, 230, 0.1)', 
//   },
//   circle1: {
//     width: width * 0.7,
//     height: width * 0.9,
//     top: -width * 0.2,
//     right: -width * 0.2,
//     transform: [{ scale: 1.2 }],
//   },
//   circle2: {
//     width: width * 0.7,
//     height: width * 0.7,
//     top: height * 0.3,
//     left: width * 0.6,
//     transform: [{ scale: 0.8 }],
//   },
//   circle3: {
//     width: width,
//     height: width*2/1.5,
//     bottom: -width * 0.2,
//     right: -width * -0.4,
   
//     transform: [{ scale: 1.0}],
//   },
//   content: {
//     flex: 1,
//     zIndex: 1,
//   },
// });

// export default Background;


import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text,View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Imagepath from '../constants/Imagepath';


const Background = ({ children,style={} }) => {
  return (
   
      <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content" // Change to 'dark-content' for light background
      />
      <ImageBackground source={Imagepath.Background} resizeMode="cover" style={styles.image}>
     {/* Content Container */}
        <View style={styles.content}>
     {children}
         </View>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>

  )
}

export default Background

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
    content: {
      marginTop:20,
    flex: 1,
    zIndex: 1,
  },
})
