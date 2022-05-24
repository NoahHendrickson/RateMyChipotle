import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import TestFile from './Components/TestFile';
import Dock from './Components/Dock';
import Body from './Components/Body';

export default function App() {

  return (

    <View style={styles.app}>
      <Body />
      <Dock style={styles.dock} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    display: 'flex',
    backgroundColor: '#937D64',
    justifyContent: 'flex-end',
  },

  dock: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    backgroundColor: '#585B56',
    height: 82,
    justifyContent: 'space-around',
  }
});
