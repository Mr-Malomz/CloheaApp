import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateInputField from '../../components/DateInputField';
import RNPickerSelect from 'react-native-picker-select';
import TextInputwithBG from '../../components/TextInputwithBG';
import CustomButton from '../../components/CustomButton';

const NewAppointment = () => {
	const navigation = useNavigation();
	const [state, setState] = useState({
		date: new Date(),
		show: false,
		picker: '',
	});

	const handleDateChange = (e: any, selectedDate: Date | undefined) => {
		const currentDate = selectedDate || state.date;
		setState({ ...state, date: currentDate });
		console.log(currentDate);
	};

	const handleClickDate = () => setState({ ...state, show: !state.show });

	return (
		// <SafeAreaView style={styles.container}>
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<HeaderMiniText text='new appointment' textColor='#2671B8' />
				<DateInputField
					onPress={handleClickDate}
					mainText='Preferred Date'
					miniText={state.date.toDateString()}
					bgColor='#DCE8F4'
				/>
				{state.show && (
					<DateTimePicker
						testID='dateTimePicker'
						value={state.date}
						mode={'date'}
						is24Hour={true}
						display='default'
						onChange={(e, date) => handleDateChange(e, date)}
					/>
				)}
				<View style={styles.pickerContainer}>
					<Text style={styles.pickerText}>
						Select From Favourite Doctor
					</Text>
					<RNPickerSelect
						placeholder={{
							label: '...',
							// value: null,
							color: 'gray',
						}}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' },
						]}
						onValueChange={(value) =>
							setState({ ...state, picker: value })
						}
						style={{
							...pickerSelectStyles,
							iconContainer: {
								top: 10,
								right: 10,
							},
						}}
						value={state.picker}
						useNativeAndroidPickerStyle={false}
						Icon={() => {
							return (
								<AntDesign
									name='caretdown'
									size={24}
									color='#6E747A'
								/>
							);
						}}
					/>
				</View>
				<TextInputwithBG mainText='Title of Appointment' height={35} />
				<TextInputwithBG mainText='Other Details' height={128} />
				<CustomButton
					text='schedule appointment'
					onPress={() => console.log(123)}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
				/>
			</View>
		</ScrollView>
		// </SafeAreaView>
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
	pickerText: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.7)',
		fontWeight: '600',
		marginBottom: 10,
	},
	pickerContainer: {
		marginBottom: 30,
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

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		backgroundColor: '#DCE8F4',
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 40,
		paddingVertical: 6,
		borderRadius: 8,
		color: 'black',
		paddingRight: 30,
		backgroundColor: '#DCE8F4',
	},
});

export default NewAppointment;
