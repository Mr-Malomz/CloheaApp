import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import DrawerContent from './DrawerContent';

type RootStackParamList = {
	Home: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const HomePage = () => {
	return (
		<NavigationContainer independent={true}>
			<Drawer.Navigator drawerContent={props => <DrawerContent prop={props} />}>
				<Drawer.Screen name='Home' component={Home} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default HomePage;
