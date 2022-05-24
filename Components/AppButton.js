import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Find from "../assets/searchIcon-01.svg"

const AppButton = () => {
  return (
    <View style={styles.AppButton}>
      <Find width={20} height={20} fill={"#E26D5C"} />
    </View>
  )
}

const styles = StyleSheet.create({
  AppButton: {
    color: 'orange',
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35,
    marginLeft: 10,
    // shadowColor: '#352208',
    // shadowRadius: 15,
    // shadowOpacity: .5,
  },
})

export default AppButton