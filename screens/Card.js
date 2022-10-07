import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const Card = () => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
         
      <Text>Card</Text>
    </View>
    <View style={styles.bottomBox}>
      <Text>
        bottomBox
      </Text>
    </View>
    </TouchableOpacity>
    
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#eee',
        height:130,
        width:180,
        borderRadius:12,
        elevation:5,
        marginVertical:2,
        margin:8,
    },
    bottomBox:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#eee',
        height:40,
        width:180,
        marginLeft:8,

    }
})