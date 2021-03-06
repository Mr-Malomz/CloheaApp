import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/onboarding/Splash';
import Login from './src/screens/onboarding/Login';
import Register from './src/screens/onboarding/Register';
import ForgotPassword from './src/screens/onboarding/ForgotPassword';
import NewPassword from './src/screens/onboarding/NewPassword';
import Congratulation from './src/screens/onboarding/Congratulation';
import InputOTP from './src/screens/onboarding/InputOTP';
import Home from './src/screens/authScreen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/authScreen/HomePage';
import EmergencyContact from './src/screens/authScreen/EmergencyContact';
import AboutUs from './src/screens/authScreen/AboutUs';
import EditProfile from './src/screens/authScreen/EditProfile';
import ContactUs from './src/screens/authScreen/ContactUs';

type RootStackParamList = {
	Home: undefined;
	Splash: undefined;
	Login: undefined;
	Register: undefined;
	ForgotPassword: undefined;
	Congratulation: undefined;
	NewPassword: undefined;
	InputOTP: undefined;
	EmergencyContact: undefined;
	AboutUs: undefined;
	EditProfile: undefined;
	ContactUs: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Splash'
					component={Splash}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
				<Stack.Screen
					name='ForgotPassword'
					component={ForgotPassword}
				/>
				<Stack.Screen name='NewPassword' component={NewPassword} />
				<Stack.Screen
					name='Congratulation'
					component={Congratulation}
				/>
				<Stack.Screen name='InputOTP' component={InputOTP} />
				<Stack.Screen
					name='Home'
					component={HomePage}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='EmergencyContact'
					component={EmergencyContact}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='AboutUs'
					component={AboutUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='EditProfile'
					component={EditProfile}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='ContactUs'
					component={ContactUs}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
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
