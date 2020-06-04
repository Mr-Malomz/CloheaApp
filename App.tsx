import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/onboarding/Splash';
import Login from './src/screens/onboarding/Login';
import Register from './src/screens/onboarding/Register';
import ForgotPassword from './src/screens/onboarding/ForgotPassword';
import NewPassword from './src/screens/onboarding/NewPassword';
import Congratulation from './src/screens/onboarding/Congratulation';
import InputOTP from './src/screens/onboarding/InputOTP';

export default function App() {
	return (
		// <View style={styles.container}>
		// </View>
		// <Splash />
		// <Login />
		// <Register />
		// <ForgotPassword />
		// <NewPassword />
		// <Congratulation />
		<InputOTP />
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
