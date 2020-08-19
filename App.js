import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
      <Image style={styles.image} />
      </View>
      <View style={styles.row2}>
      <Text style={styles.text}>Software Devoloper Engeenier</Text>
      </View>
      <View style={styles.row}>
      <TouchableOpacity><Text style={styles.buttonleft}>Button1</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.buttonright}>Button2</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity><Text style={styles.buttonleft}>Button3</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.buttonright}>Button4</Text></TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:2,
    borderColor: 'green',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'blue',

    
  },
  row1: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'blue'
  },
  row2: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'blue'
  },
  image: {
    height: 180,
    width: 180,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  buttonleft: {
    textAlign:'left',
    borderColor: 'green',
    borderWidth:3,
    flex:1,
    width: 180,
    paddingTop: 90,
    paddingLeft: 65,
    
    
  },
  buttonright: {
    textAlign:'right',
    borderColor: 'green',
    borderWidth:3,
    flex:1,
    width: 180,
    paddingTop: 90,
    paddingRight: 65,
    marginLeft: 10
  }
});
