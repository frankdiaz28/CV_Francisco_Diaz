import React  from 'react'
import {Text, View, StyleSheet, Dimensions, SectionList} from 'react-native'
import { Rating } from 'react-native-elements'

const renderItem = ({item}) => {
    return(    
        <View style={styles.listView}>
        <Text style={styles.text}>{item.name}</Text>
        <Rating  imageSize={35} readonly startingValue={item.raiting}/>
        </View>     
    )   
}

const renderSectionHeader = ({section}) => {
  return(
    <View>
        <Text style={styles.title}>{section.title}</Text>
    </View>
  )
}

export default () => {

    return (
        <View style={styles.container}>
            <SectionList 
              sections = {[
            {
                title: 'Grupo1',
                data: [{
                    id: '1',
                    name: 'Java',
                    raiting: '4'
                }]    
            },
            {
                title: 'Grupo2',
                data: [{
                    id: '2',
                    name: 'C#',
                    raiting: '3'
                },
                       {       
                    id: '3',
                    name: 'C++',
                    raiting: '1'
                }]    
            },
        ]}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 20,
        width: '70%',
        backgroundColor: 'green',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
      },
      container: {
         paddingTop: 20,
         minWidth: Dimensions.get('window').width - 100,
         minHeight: Dimensions.get('window').height -100,
      },
      listView:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',    
      },
      text: {
         fontSize: 26
      },
      title: {
        fontSize: 30
      }

})