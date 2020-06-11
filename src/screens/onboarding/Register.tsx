import React, { useState, FC } from 'react';
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Text,
	ScrollView,
	Dimensions,
} from 'react-native';
import InputField from '../../components/InputField';
import HeaderText from '../../components/HeaderText';
import CustomButton from '../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
	Login: undefined;
	Register: undefined;
	Home: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Register'>;

const Register: FC<Props> = ({ navigation }) => {
	const { height } = Dimensions.get('window');
	const [state, setState] = useState({ screenHeight: 0 });
	const scrollEnabled = state.screenHeight > height;

	const onContentSizeChange = (contentWidth: number, contentHeight: number) =>
		setState({ screenHeight: contentHeight });

	return (
		<ScrollView
			scrollEnabled={scrollEnabled}
			onContentSizeChange={onContentSizeChange}
		>
			<KeyboardAvoidingView
				style={styles.registerContainer}
				behavior='padding'
			>
				<View style={styles.inputsWrapper}>
					<HeaderText text='create account' />
					<InputField label='firstname' autoCapitalize='none' />
					<InputField label='surname' autoCapitalize='none' />
					<InputField label='email' autoCapitalize='none' />
					<InputField label='phone number' autoCapitalize='none' />
					<InputField label='password' autoCapitalize='none' />
					<CustomButton
						text='register'
						onPress={() => navigation.navigate('Home')}
						customStyleContaner={styles.buttonRegister}
						customStyleText={styles.buttonTextRegister}
					/>
					<Text style={styles.signUpText}>
						Already have an account ?{' '}
						<Text
							style={styles.signUpAction}
							onPress={() => navigation.navigate('Login')}
						>
							Login
						</Text>
					</Text>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	registerContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		paddingHorizontal: 16,
		paddingTop: 50,
	},
	inputsWrapper: {
		width: '100%',
		marginTop: 60,
	},
	buttonRegister: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: '100%',
		marginBottom: 30,
	},
	buttonTextRegister: {
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
});

export default Register;
