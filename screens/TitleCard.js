import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>xentice</Text>
    </View>
  )
}

export default TitleCard

const styles = StyleSheet.create({
    container:{
      
        
    },
    heading:{
        fontSize:35,
        color:'#369',

    }

})