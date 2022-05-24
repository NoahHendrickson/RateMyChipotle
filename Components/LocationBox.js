import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { render } from 'react-dom'

const DATA = [
  {
    id: 'one',
    title: 'first item',
  },
  {
    id: 'two',
    title: 'second item',
  },
  {
    id: 'three',
    title: 'third item',
  },
  {
    id: 'four',
    title: 'fourth item',
  },
  {
    id: 'five',
    title: 'fifth item',
  },
]

const LocationBox = (props) => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={props.style}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginHorizontal: 5,
    marginVertical: 2.5,
    borderRadius: 15,
    backgroundColor: '#D4D8D4',
  }
})

export default LocationBox