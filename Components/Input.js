import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import AppButton from './AppButton';

export default function Input() {
  return (
    <View style={styles.searchContainer}>
       <TextInput
        placeholderTextColor={'grey'}
        placeholder='search by city' style={styles.searchBar} />
        <AppButton />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
  },
  searchBar: {
    flex: 1,
    height: 50,
    padding: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 35,
  },
});