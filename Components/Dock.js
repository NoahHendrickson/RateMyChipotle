import { View, Text } from 'react-native'
import React from 'react'
import Avocado from "../assets/avocado-05.svg"
import Avatar from "../assets/avatar-06.svg"
import Search from "../assets/searchIcon-01.svg"

const Dock = (props) => {
  return (
  <View style={props.style}>
      <Avatar fill={'black'} width={25} height={25} style={{marginTop: 10}}/>
      <Search fill={'black'} width={25} height={25} style={{marginTop: 10}}/>
      <Avocado width={40} height={40} style={{marginTop: 10}}/>
  </View>
  )
}

export default Dock