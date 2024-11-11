import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#72063c",'#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizeMode="cover" 
      imageStyle={styles.backgoundImage}
      />
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  },
  backgoundImage: {
    opacity: 0.15,
  }
});
