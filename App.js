import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './Components/List';

export default function App() {
  return (
     <View style={[styles.container, styles.containerText]}>
     <List style={[styles.container, styles.text]}/>
     </View>
  );
}
  const styles = StyleSheet.create({
    container : {
      flex:1,
      backgroundColor:'lightgray'
    
    },
    text : {
    fontSize:30
  }
  
  })



