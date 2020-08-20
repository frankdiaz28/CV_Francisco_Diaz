import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';
import Modals from './Modal'







export default ({textBtnLeft, textBtnRight}) => {
     const [visibility, setVisibility] = useState(false)

     const onClickModal = () => {
        setVisibility(!visibility)
    }

    return (
      <View style={styles.row}> 
       <Modals
        visibility={visibility}
       >
            <Text>Prueba</Text>
            <Button 
            title="Cerrar" 
            onPress={onClickModal}
            />
        </Modals>
      <TouchableOpacity
       onPress={onClickModal}
      ><Text style={styles.buttonleft}>{textBtnLeft}</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.buttonright}>{textBtnRight}</Text></TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'blue',  
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
      },
})