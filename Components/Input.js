import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import AppButton from './AppButton';

export default function Input() {
  return (
    <View style={styles.searchContainer}>
       <TextInput
        placeholderTextColor={'grey'}
        placeholder='Search By City' style={styles.searchBar} />
        <AppButton />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
    shadowColor: '#352208',
    shadowRadius: 20,
    shadowOpacity: .5,
  },
  searchBar: {
    flex: 1,
    height: 50,
    padding: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 35,
    // shadowColor: '#352208',
    // shadowRadius: 15,
    // shadowOpacity: .5,
  },
});