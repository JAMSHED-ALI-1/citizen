import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const GradientBackground = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4a3b63', '#352849']}
        style={styles.mainGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <LinearGradient
          colors={['#4a3b63', '#352849']}
          style={[styles.wavyGradient, { transform: [{ rotate: '-15deg' }] }]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.8 }}
        />
        <LinearGradient
          colors={['#4a3b63', '#352849']}
          style={[styles.wavyGradient, { transform: [{ rotate: '25deg' }] }]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainGradient: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  wavyGradient: {
    position: 'absolute',
    width: Dimensions.get('window').width * 1.5,
    height: Dimensions.get('window').height * 1.5,
    borderRadius: 300,
    opacity: 0.6,
    transform: [{ translateX: -100 }, { translateY: -200 }],
  },
});

export default GradientBackground;