import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.inputField} placeholder={'Search'}>

        </TextInput>
      
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    inputField:{
        margin:5,
        width: '90%',
        height:35,
        borderRadius:1,
        borderWidth:0.1,
        padding:10
    }

})