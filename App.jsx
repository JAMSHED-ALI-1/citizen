import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Stacktab from './src/Navigations/Stacktab';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar 
        barStyle="light-content"
        backgroundColor="red"
        translucent={false}
      /> */}
      <View style={styles.content}>
        <Stacktab />
      </View>
     
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#322867', // or whatever background color you want
  },
  content: {
    flex: 1,
  }
});