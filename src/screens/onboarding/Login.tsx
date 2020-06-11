import React, { FC } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import InputField from '../../components/InputField';
import HeaderText from '../../components/HeaderText';
import CustomButton from '../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
	Login: undefined;
	ForgotPassword: undefined;
	Register: undefined;
	Home: undefined
};

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<Props> = ({ navigation }) => {
	return (
		<KeyboardAvoidingView style={styles.loginContainer} behavior='padding'>
			<View style={styles.inputsWrapper}>
				<HeaderText text='welcome back,' />
				<InputField label='email' autoCapitalize='none' />
				<InputField label='password' autoCapitalize='none' />
				<CustomButton
					text='log in'
					onPress={() => navigation.navigate('Home')}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
				/>
				<Text style={styles.signUpText}>
					Don't have an account ?{' '}
					<Text
						style={styles.signUpAction}
						onPress={() => navigation.navigate('Register')}
					>
						Sign Up
					</Text>
				</Text>
				<Text
					style={[styles.signUpText, styles.forgotPassword]}
					onPress={() => navigation.navigate('ForgotPassword')}
				>
					Forgot Password ?
				</Text>
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
		textAlign: 'center',
		marginBottom: 30,
	},
	signUpAction: {
		fontWeight: 'bold',
		color: '#2671B8',
	},
	forgotPassword: {
		fontWeight: 'bold',
	},
});

export default Login;
