import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';
import Modals from './Modal'
import Skills from '../modals/Skills';

export default ({textBtnLeftUp, textBtnRightUp, textBtnLeftDown, textBtnRightDown}) => {
     const [visibility, setVisibility] = useState(false)
     const [visibilityFilter, setVisibilityFilter] = useState('')

     const onClickModal = () => {
       setVisibilityFilter('Modal1')
       setVisibility(!visibility)
    }

    const onClickModal2 = () => {
      setVisibilityFilter('Modal2')
      setVisibility(!visibility)
   }
   
   const onClickModal3 = () => {
    setVisibilityFilter('Modal3')
    setVisibility(!visibility)
 }

   const onClickModal4 = () => {
   setVisibilityFilter('Modal4')
   setVisibility(!visibility)
}

    return (
      <>
      <View style={styles.row}> 
      <Modals visibility={visibility}>
        {visibilityFilter === 'Modal1' ? <><Text>Upleft</Text></> : 
         visibilityFilter === 'Modal2' ? <><Text>UpRight</Text></> :
         visibilityFilter === 'Modal3' ? <><Skills /></> : 
         visibilityFilter === 'Modal4' ? <><Text>DownRight</Text></> :
         <></>  }

          <Button title="cerrar" onPress={onClickModal}/>
      </Modals>

      <TouchableOpacity
       onPress={onClickModal}
      ><Text style={styles.buttonleft}>{textBtnLeftUp}</Text></TouchableOpacity>        
      <TouchableOpacity
       onPress={onClickModal2}
      ><Text style={styles.buttonright}>{textBtnRightUp}</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity
       onPress={onClickModal3}
      ><Text style={styles.buttonleft}>{textBtnLeftDown}</Text></TouchableOpacity>
      <TouchableOpacity
       onPress={onClickModal4}
      ><Text style={styles.buttonright}>{textBtnRightDown}</Text></TouchableOpacity>
      </View>
      </>
      
      
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