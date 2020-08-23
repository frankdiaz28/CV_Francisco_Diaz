import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {Imagen, Texto, Buttons} from './src/components/index'

export default function App() {


  return (
    <View style={styles.container}>
       <Imagen />
       <Texto />
       <Buttons 
       textBtnLeftUp="About me"
       textBtnRightUp="Experience"
       textBtnLeftDown="Skills"
       textBtnRightDown="Contact"
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:2,
    borderColor: 'green',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
});
