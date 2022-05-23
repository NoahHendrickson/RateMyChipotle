import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import TextGradient from './Components/TextGradient';
import TestFile from './Components/TestFile';
import Input from './Components/Input';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <TextGradient text="Find Your Chipotle." />
      <Input />
      <StatusBar style="auto" />   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#937D64',
  },
  searchBar: {
    height: 50,
    margin: 35,
    padding: 25,
    borderRadius: 50,
    backgroundColor: 'white',
  }
});
