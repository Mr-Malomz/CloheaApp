import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import InputField from '../../components/InputField';
import HeaderText from '../../components/HeaderText';
import CustomButton from '../../components/CustomButton';

const NewPassword = () => {
	return (
		<KeyboardAvoidingView style={styles.loginContainer} behavior='padding'>
			<AntDesign name='arrowleft' size={24} color='black' />
			<View style={styles.inputsWrapper}>
				<HeaderText text='forgot password' />
				<Text style={styles.signUpText}>
					Enter and confirm password change
				</Text>
				<InputField label='password' autoCapitalize='none' />
				<InputField label='confirm password' autoCapitalize='none' />
				<CustomButton
					text='Submit'
					onPress={() => console.log(123)}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		paddingHorizontal: 16,
	},
	inputsWrapper: {
		width: '100%',
		marginTop: 60,
	},
	buttonLogin: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: '100%',
		marginBottom: 30,
	},
	buttonTextLogin: {
		color: '#ffffff',
	},
	signUpText: {
		fontSize: 12,
		textAlign: 'left',
		marginBottom: 30,
	},
});

export default NewPassword;
