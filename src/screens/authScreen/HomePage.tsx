import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import DrawerContent from './DrawerContent';
import AppointmentHome from './AppointmentHome';
import { createStackNavigator } from '@react-navigation/stack';

type RootDrawerParamList = {
	Home: undefined;
	AppointmentHome: undefined;
};

type RootStackParamList = {
	AppointmentHome: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const HomePage = () => {
	return (
		<NavigationContainer independent={true}>
			<Drawer.Navigator
				drawerContent={(props) => <DrawerContent prop={props} />}
			>
				<Drawer.Screen name='Home' component={Home} />
				<Drawer.Screen
					name='AppointmentHome'
					options={{ gestureEnabled: false }}
					component={AppointmentHome}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default HomePage;
