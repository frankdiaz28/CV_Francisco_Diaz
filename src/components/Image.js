import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default() => {
    return (
    <View style={styles.row1}>
    <Image style={styles.image} />
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: 180,
        backgroundColor: 'black',
        alignSelf: 'center',
      },
      row1: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'blue'
      },
})