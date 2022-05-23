import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from "react-native"
import MaskedView from "@react-native-masked-view/masked-view"
import { LinearGradient } from "expo-linear-gradient";

export default function TextGradient(props) {

  return (
    <MaskedView maskElement={<Text numberOfLines={2} style={styles.gradientText}>{props.text}</Text>}>
      <LinearGradient
        colors={["#64B6AC", '#8ec77f', '#EFDD8D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.33, .66, 1]}>
        <Text numberOfLines={2} style={styles.headline}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0,
  },
  gradientText: {
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});