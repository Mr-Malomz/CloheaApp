import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/onboarding/Splash';
import Login from './src/screens/onboarding/Login';
import Register from './src/screens/onboarding/Register';

export default function App() {
  return (
    // <View style={styles.container}>
    // </View>
      // <Splash />
      // <Login />
      <Register />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
