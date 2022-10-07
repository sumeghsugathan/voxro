import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View>

        <View style={styles.backGround}>
        <Image style={styles.image} source={require('../assets/user.png')} />
       
        </View>
      
    </View>
  )
}

export default User

const styles = StyleSheet.create({

    backGround:{
        backgroundColor:'white',
        borderRadius:35,
        height:70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,         
    },
    image:{
      height:70,
      width:70
    }
})