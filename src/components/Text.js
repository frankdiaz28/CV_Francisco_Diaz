import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default () => {
    return (
        <View style={styles.row2}>
        <Text style={styles.text}>Software Devoloper Engeenier</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row2: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'blue'
      },
      text: {
        alignSelf: 'center',
        fontSize: 20,
      },
})