import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import TextGradient from './TextGradient';
import Input from './Input';
import LocationBox from './LocationBox';



const Body = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextGradient text="Find Your Chipotle." />
      <Input />
      <LocationBox style={styles.results} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  results: {
    flex: 1,
    margin: 35,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#352208',
    shadowRadius: 15,
    shadowOpacity: .5,
  },

  result: {
    flex: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 5,
  }
})

export default Body