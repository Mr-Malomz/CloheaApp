import React, { useState } from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import {
	ScrollView,
	TouchableOpacity,
	FlatList,
} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';
import ButtonMini from '../../components/ButtonMini';
import DateInputField from '../../components/DateInputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../../components/CustomButton';

const MedicalHome = () => {
	const navigation = useNavigation();
	const [state, setState] = useState({
		isOpen: false,
		date1: new Date(),
		date2: new Date(),
		show1: false,
		show2: false,
	});

	const handleDateChange1 = (e: any, selectedDate: Date | undefined) => {
		const currentDate = selectedDate || state.date1;
		setState({
			...state,
			date1: currentDate,
			show1: Platform.OS === 'ios',
		});
		console.log(currentDate);
	};

	const handleClickDate1 = () => setState({ ...state, show1: !state.show1 });

	const handleDateChange2 = (e: any, selectedDate: Date | undefined) => {
		const currentDate = selectedDate || state.date2;
		setState({
			...state,
			date2: currentDate,
			show2: Platform.OS === 'ios',
		});
		console.log(currentDate);
	};

	const handleClickDate2 = () => setState({ ...state, show2: !state.show2 });

	const handleModalToggle = () =>
		setState({ ...state, isOpen: !state.isOpen });

	const data = [
		{ desc: 'Malaria & Typhoid', date: '20 - 01 - 2019' },
		{ desc: 'Testing', date: '20 - 01 - 2019' },
		{ desc: 'Laboratory', date: '20 - 01 - 2019' },
		{ desc: 'Typhord', date: '20 - 01 - 2019' },
		{ desc: 'Malaria & Typhoid', date: '20 - 01 - 2019' },
		{ desc: 'Malaria & Typhoid', date: '20 - 01 - 2019' },
	];

	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<HeaderMiniText text='medical history' textColor='#2A9CAC' />
				<ButtonMini
					onPress={handleModalToggle}
					bgColor='#2A9CAC'
					isIcon={true}
					text='Filter'
					isDropdown={state.isOpen}
				/>
				{state.isOpen && (
					<View>
						<DateInputField
							onPress={handleClickDate1}
							mainText='Start Date'
							miniText={state.date1.toDateString()}
							bgColor='#DCE8F4'
						/>
						{state.show1 && (
							<DateTimePicker
								testID='dateTimePicker'
								value={state.date1}
								mode={'date'}
								is24Hour={true}
								display='default'
								onChange={(e, date) =>
									handleDateChange1(e, date)
								}
							/>
						)}
						<DateInputField
							onPress={handleClickDate2}
							mainText='EndDate Date'
							miniText={state.date2.toDateString()}
							bgColor='#DCE8F4'
						/>
						{state.show2 && (
							<DateTimePicker
								testID='dateTimePicker'
								value={state.date2}
								mode={'date'}
								is24Hour={true}
								display='default'
								onChange={(e, date) =>
									handleDateChange2(e, date)
								}
							/>
						)}
						<CustomButton
							text='schedule appointment'
							onPress={() => console.log(123)}
							customStyleContaner={styles.buttonLogin}
							customStyleText={styles.buttonTextLogin}
						/>
					</View>
				)}
				<View>
					<View style={styles.tableContainer}>
						<Text style={styles.tableText}>description</Text>
						<Text style={styles.tableText}>date</Text>
						<Text></Text>
					</View>
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<View style={styles.listContainer}>
								<Text style={styles.listItem}>{item.desc}</Text>
								<Text style={styles.listItem}>{item.date}</Text>
								<Text
									style={styles.listLink}
									onPress={() => navigation.navigate('MedicalDetails')}
								>
									View
								</Text>
							</View>
						)}
					/>
				</View>
			</View>
		</ScrollView>
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
		backgroundColor: '#2A9CAC',
		borderColor: '#2A9CAC',
		borderWidth: 2,
		borderStyle: 'solid',
		width: '100%',
		marginBottom: 30,
		// position: 'fixed'
	},
	buttonTextLogin: {
		color: '#ffffff',
	},
	tableContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		width: '75%',
	},
	tableText: {
		color: '#9F9F9F',
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	listContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		backgroundColor: 'rgba(42, 156, 172, 0.13)',
		marginBottom: 10,
		height: 35,
		alignItems: 'center',
		borderRadius: 5,
	},
	listItem: {
		color: '#000000',
		fontSize: 12,
		fontWeight: '500',
		width: '45%',
	},
	listLink: {
		color: '#2A9CAC',
		fontSize: 12,
		fontWeight: 'bold',
	},
});

export default MedicalHome;
