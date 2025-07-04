import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


import GameScreen from './screens/GameScreen';
import GameStartScreen from './screens/GameStartScreen';

import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber}/>
  }

  return (
    <LinearGradient colors={['#4f87e0', '#fff']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.imageStyle}>
          <SafeAreaView style={styles.rootScreen}>
            { screen }
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.5
  }
});
