import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../styles/colors';

const HeaderComp = ({ onpress, title, left, right, height, width, leftIcon, RightIcon }) => {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      {left ? (
        <TouchableOpacity onPress={onpress} style={styles.left}>
          <View style={[styles.leftIconContainer, { padding: height || 5 }]}>
            {leftIcon ? (
              <Image source={leftIcon} style={styles.leftImageIcon} />
            ) : (
              <Image
                source={require('../assets/images/left.png')}
                style={[styles.leftImageIcon, { tintColor: COLORS.whiteColor }]}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> // Placeholder to maintain layout consistency
      )}

      {/* Title Section */}
      {title ? <Text style={styles.text}>{title}</Text> : <View style={styles.placeholder} />}

      {/* Right Section */}
      {right ? (
        <TouchableOpacity onPress={onpress} style={styles.right}>
          <View style={styles.rightIconContainer}>
            {RightIcon ? (
              <Image
                source={RightIcon}
                style={[styles.rightImageIcon, { tintColor: COLORS.whiteColor }]}
              />
            ) : (
              <Image
                source={require('../assets/images/menu.png')}
                style={[styles.rightImageIcon, { tintColor: COLORS.whiteColor }]}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} /> // Placeholder to maintain layout consistency
      )}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: '#1E1E2C', // Optional: add background for clarity
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    flex: 2,
    textAlign: 'center', // Center the title
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.whiteColor,
  },
  leftIconContainer: {
    backgroundColor: '#403673',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  rightIconContainer: {
    backgroundColor: '#403673',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  leftImageIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  rightImageIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  placeholder: {
    flex: 1, // Placeholder to keep layout consistent when left or right is not provided
  },
});
