//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import colors from '../styles/colors';


// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
   

    return (
        <SafeAreaView style={{
            ...styles.container,
            ...style,
           
        }}>
            <StatusBar barStyle={ 'dark'} backgroundColor={'white'} />
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor,
        
    },
});

//make this component available to the app
export default WrapperContainer;