import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AppointHeader from '../../components/AppointHeader';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import NewAppointMenu from '../../components/NewAppointMenu';
import PendingAppointMenu from '../../components/PendingAppointMenu';
import { useNavigation } from '@react-navigation/native';

const AppointmentHome = () => {
	//use of hooks
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.arrowStyle}
						onPress={() => navigation.goBack()}
					>
						<AntDesign name='arrowleft' size={24} color='black' />
					</TouchableOpacity>
					<CustomButton
						text='schedule an appointment'
						onPress={() => console.log(123)}
						customStyleContaner={styles.buttonLogin}
						customStyleText={styles.buttonTextLogin}
					/>
					<View>
						<AppointHeader
							fontColor='#207FD8'
							text='new appointments'
							onPress={() => console.log(123)}
						/>
						<NewAppointMenu
							titleText='malaria and typhoid'
							bgColor='#D4E3F1'
							mainColor='#207FD8'
							hospitalName='General Hospital, Gbagada. Lagos'
							schedule='25 - Aug, 12 : 00 pm'
							Icon={MaterialCommunityIcons}
							IconName='bell-ring'
						/>
						<NewAppointMenu
							titleText='Migraine Checkup'
							bgColor='#D4E3F1'
							mainColor='#207FD8'
							hospitalName='Mercy Corp Specialist, Ikeja. Lagos'
							schedule='23 - Sep, 2 : 00 pm'
							Icon={MaterialCommunityIcons}
							IconName='bell-ring'
						/>
						<NewAppointMenu
							titleText='Maigraine Follow-up'
							bgColor='#D4E3F1'
							mainColor='#207FD8'
							hospitalName='Mercy Corp Specialist, Ikeja. Lagos'
							schedule='23 - Oct, 2 : 00 pm'
							Icon={MaterialCommunityIcons}
							IconName='bell-ring'
						/>
					</View>
					<View style={{ marginTop: 30 }}>
						<AppointHeader
							fontColor='#514194'
							text='pending appointments'
							onPress={() => console.log(123)}
						/>
						<PendingAppointMenu
							bgColor='#DCD9EA'
							titleText='Hair Transplant'
							hospitalName='IB Teaching Hospital, Ibadan, Oyo'
						/>
						<PendingAppointMenu
							bgColor='#DCD9EA'
							titleText='Skin Infection'
							hospitalName='Mercy Corp Specialist, Ikeja. Lagos'
						/>
						<PendingAppointMenu
							bgColor='#DCD9EA'
							titleText='Quarterly Follow-up'
							hospitalName='IB Teaching Hospital, Ibadan, Oyo'
						/>
					</View>
					<View style={{ marginTop: 30 }}>
						<AppointHeader
							fontColor='#C4C4C4'
							text='recent appointments'
							onPress={() => console.log(123)}
						/>
						<NewAppointMenu
							titleText='Toothache'
							bgColor='#E7EAEC'
							mainColor='#5B5B5B'
							IconColor='#4BD37B'
							hospitalName='General Hospital, Gbagada. Lagos'
							schedule='23 - Oct, 2 : 00 pm'
							Icon={AntDesign}
							IconName='checkcircle'
						/>
						<NewAppointMenu
							titleText='Checkup and Vitals'
							bgColor='#E7EAEC'
							mainColor='#5B5B5B'
							IconColor='#FF5A79'
							hospitalName='Mercy Corp Specialist, Ikeja. Lagos'
							schedule='23 - Oct, 2 : 00 pm'
							Icon={AntDesign}
							IconName='closecircle'
						/>
						<NewAppointMenu
							titleText='Maigraine Follow-up'
							bgColor='#E7EAEC'
							mainColor='#5B5B5B'
							IconColor='#4BD37B'
							hospitalName='Mercy Corp Specialist, Ikeja. Lagos'
							schedule='23 - Mar, 2 : 00 pm'
							Icon={AntDesign}
							IconName='checkcircle'
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16,
		paddingTop: 37,
	},
	arrowStyle: {
		marginBottom: 60,
	},
	buttonLogin: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: '100%',
		marginBottom: 30,
		// position: 'fixed'
	},
	buttonTextLogin: {
		color: '#ffffff',
	},
});

export default AppointmentHome;
