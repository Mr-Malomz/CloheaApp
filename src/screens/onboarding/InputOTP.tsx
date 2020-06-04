import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import OtpSVG from '../../utils/svgs/OtpSVG';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const InputOTP = () => {
	return (
		<View style={styles.loginContainer}>
			<View style={styles.svgContainer}>
				<OtpSVG />
				<View style={styles.sliderContainer}>
					<Text style={styles.sliderTitle}>
						Enter the verification code you just received{'\n'} on
						your email
					</Text>
				</View>
				<View style={styles.otpContainer}>
					<OTPInputView
						pinCount={4}
						// code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
						// onCodeChanged = {code => { this.setState({code})}}
						autoFocusOnLoad
						codeInputFieldStyle={styles.underlineStyleBase}
						codeInputHighlightStyle={
							styles.underlineStyleHighLighted
						}
						onCodeFilled={(code) => {
							console.log(`Code is ${code}, you are good to go!`);
						}}
					/>
				</View>
				<CustomButton
					text='submit'
					onPress={() => console.log(123)}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
				/>
				<Text style={styles.signUpText}>
					Didn't get any code ?{' '}
					<Text style={styles.signUpAction}>Resend</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingHorizontal: 16,
	},
	svgContainer: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 60,
	},
	sliderContainer: {
		marginTop: 60,
	},
	sliderTitle: {
		textAlign: 'left',
		fontWeight: 'bold',
	},
	otpContainer: {
		width: '80%',
		height: '20%',
		paddingHorizontal: 16,
	},
	borderStyleHighLighted: {
		borderColor: '#03DAC6',
	},

	underlineStyleBase: {
		width: 30,
		height: 45,
		borderWidth: 0,
		borderBottomWidth: 3,
	},
	underlineStyleHighLighted: {
		borderColor: '#03DAC6',
	},
	buttonLogin: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: '100%',
		marginTop: 30,
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
});

export default InputOTP;
