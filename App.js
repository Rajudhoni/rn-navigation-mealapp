import React, { useState } from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import fetchFonts from './assets/fonts/FetchFonts';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {   
       <AppLoading 
            startAsync={fetchFonts} 
            onFinish={() => setFontLoaded(true)}
      />
  }
  
  return <MealsNavigator />

}







