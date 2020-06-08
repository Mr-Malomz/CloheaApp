import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {
	MaterialCommunityIcons,
	Entypo,
	Fontisto,
	MaterialIcons,
	Zocial
} from '@expo/vector-icons';
import MenuCardWithText from '../../components/MenuCardWithText';
import MenuCardWithIcon from '../../components/MenuCardWithIcon';
import HeartSVG from '../../utils/svgs/HeartSVG';
import DoctorSVG from '../../utils/svgs/DoctorSVG';

const Home = () => {
	return (
		<ScrollView>
			<View style={styles.loginContainer}>
				<View style={styles.profileContainer}>
					<MaterialCommunityIcons
						name='segment'
						size={24}
						color='black'
					/>
					<Image
						source={require('../../utils/images/download.jpg')}
						style={styles.imageStyle}
					/>
				</View>
				<Text style={styles.headingText}>Hi, Esther</Text>
				<MenuCardWithText
					rightText='Appointment'
					isSmallIcon={false}
					onPress={() => console.log(123)}
					custStyles={styles.appointment}
					Icon={Entypo}
					IconName='calendar'
					leftTextSmall='Total'
					leftText='9'
				/>
				<MenuCardWithIcon
					rightText='Medical History'
					Icon={Fontisto}
					IconName='history'
					onPress={() => console.log(123)}
					custStyles={styles.medical}
					Svg={HeartSVG}
				/>
				<MenuCardWithIcon
					rightText='Find a Doctor'
					Icon={MaterialIcons}
					IconName='person-add'
					onPress={() => console.log(123)}
					custStyles={styles.doctor}
					Svg={DoctorSVG}
				/>
				<MenuCardWithText
					rightText='Financial History'
					isSmallIcon={false}
					onPress={() => console.log(123)}
					custStyles={styles.financial}
					Icon={MaterialCommunityIcons}
					IconName='finance'
					leftTextSmall='December Total'
					leftText='₦ 30, 000'
				/>
				<MenuCardWithText
					rightText='Emergency'
					isSmallIcon={true}
					onPress={() => console.log(123)}
					custStyles={styles.emergency }
					Icon={Entypo}
					IconName='squared-plus'
					SmallIcon={Zocial}
					SmallIconName='call'
					leftText='08056784567'
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16,
		paddingTop: 50,
	},
	profileContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	imageStyle: {
		borderWidth: 3,
		borderColor: '#2671B8',
		borderStyle: 'solid',
		height: 38,
		width: 38,
		borderRadius: 50,
	},
	headingText: {
		fontWeight: 'bold',
		fontSize: 24,
		lineHeight: 29,
		marginBottom: 30,
	},
	appointment: {
		backgroundColor: '#2671B8',
	},
	medical: {
		backgroundColor: '#2A9CAC',
	},
	doctor: {
		backgroundColor: '#27127B',
	},
	financial: {
		backgroundColor: '#096A77'
	},
	emergency: {
		backgroundColor: '#771709'
	}
});

export default Home;
