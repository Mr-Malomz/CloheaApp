import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import DrawerContent from './DrawerContent';
import AppointmentHome from './AppointmentHome';
import NewAppointment from './NewAppointment';
import MedicalHome from './MedicalHome';
import MedicalDetails from './MedicalDetails';
import FinancialHome from './FinancialHome';

type RootDrawerParamList = {
	Home: undefined;
	AppointmentHome: undefined;
	NewAppointment: undefined;
	MedicalHome: undefined;
	MedicalDetails: undefined;
	FinancialHome: undefined;
};


const Drawer = createDrawerNavigator<RootDrawerParamList>();

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
				<Drawer.Screen
					name='NewAppointment'
					options={{ gestureEnabled: false }}
					component={NewAppointment}
				/>
				<Drawer.Screen
					name='MedicalHome'
					options={{ gestureEnabled: false }}
					component={MedicalHome}
				/>
				<Drawer.Screen
					name='MedicalDetails'
					options={{ gestureEnabled: false }}
					component={MedicalDetails}
				/>
				<Drawer.Screen
					name='FinancialHome'
					options={{ gestureEnabled: false }}
					component={FinancialHome}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default HomePage;
