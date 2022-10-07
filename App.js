import React, { Component, useEffect, useState } from 'react'
import { 
  Text,
  StyleSheet,
  View,
  SafeAreaView ,
  ActivityIndicator,
  FlatList, 
  ScrollView,
  StatusBar
  } from 'react-native'
  import Card from './screens/Card';
  import TitleCard from './screens/TitleCard';
  import SearchBar from './screens/SearchBar';
  import PropertyCard from './screens/PropertyCard';
  import User from './screens/User';

  const Property = ["property1", "property2","property3" ];
  const apiURL = 'https://api.xentice.com/api/postadSelect';
  const Home =()=> {
    return(
      <ScrollView >     
        <View style={styles.container}>
          <TitleCard/>
          <User/>
        </View >
        <View>
          <SearchBar/>
        </View>
        <View style={{flexDirection:'row' , margin:3 , padding:5}}>
          <Text style={styles.header}>Property</Text>
          <Text style={styles.header}>Services</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>

        </View>
       
       <View style={{margin:3 , padding:5}}>
       <Text style={styles.header}>Commercial office</Text>
        <FlatList 
        data={Property}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({item})=> (
        <Card/>
        )}
        />
       </View>
       <View style={{margin:3 , padding:5}}>
        <Text style={styles.header}>Commercial office</Text>
        <FlatList 
        data={Property}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({item})=> (
        <Card/>
        )}
        />
       </View>

      </ScrollView>
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor: '#eeeeee',
    justifyContent:'space-between',
    padding:10
    
    
  },
  itemContainer:{
    width:'100%',
    padding:10,
    backgroundColor:'#fff'

  },
  header:{
    color:"#000",
    fontSize:18,
    fontWeight:'bold',
    marginRight:10,
    marginBottom:10
  }
})
export default Home;