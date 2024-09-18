import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useRef, useEffect, useState } from 'react';

export default function App() {
  const welcomeRef = useRef();
  const heartRef = useRef(null);
  const [liked, setLiked] = useState(false);
  useEffect(()=> {
    welcomeRef?.current?.play(0,100)
  }, [])

  const WelcomeSalutation = () => {
    welcomeRef?.current?.play();
  }
  const handleLike = () => {
    if(liked){
      heartRef?.current?.reset();
    } else {
      heartRef?.current?.play(30,144)
    }
   setLiked(!liked);
  }
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView className="flex-1"  source={require("./assets/MobileView.json")} autoPlay loop />
      </View>
      <View style={styles.iconRow}>
        <Pressable style={styles.icon} onPress={handleLike}>
          <LottieView ref={heartRef}  loop={false} className="flex-1" source={require("./assets/heart.json")} />
        </Pressable>
        <Pressable style={styles.icon} onPress={WelcomeSalutation}>
          <LottieView ref={welcomeRef}  loop={false} className="flex-1" source={require("./assets/Welcome.json")} />
        </Pressable>
      </View>
      <Text className="text-3xl text-red-600 font-semibold">React Native Lottie Animations!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    height:300,
    aspectRatio:1,
  },
  iconRow:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  icon:{
    height:300,
    aspectRatio:1
  }
});
