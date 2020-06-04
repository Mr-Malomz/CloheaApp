import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Congrat from '../../utils/svgs/Congrat';
import HeaderText from '../../components/HeaderText';
import CustomButton from '../../components/CustomButton';

const Congratulation = () => {
	return (
		<View style={styles.loginContainer}>
			<View style={styles.svgContainer}>
				<HeaderText text='Congratulations' custStyle={styles.headingText}/>
				<Congrat />
				<View style={styles.sliderContainer}>
					<Text style={styles.sliderTitle}>
						Password reset successful! Click on proceed{'\n'} to
						login with your new credential
					</Text>
				</View>
                <CustomButton
                    text='Proceed'
                    onPress={() => console.log(123)}
                    customStyleContaner={styles.buttonLogin}
                    customStyleText={styles.buttonTextLogin}
                />
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
	headingText: {
        textAlign: 'center',
        marginBottom: 60
	},
	sliderContainer: {
		marginTop: 60,
	},
	sliderTitle: {
		textAlign: 'left',
		fontWeight: 'bold',
    },
    buttonLogin: {
        backgroundColor: '#2671B8',
        borderColor: '#2671B8',
        borderWidth: 2,
        borderStyle: 'solid',
        width: '100%',
        marginTop: 60,
    },
    buttonTextLogin: {
        color: '#ffffff',
    },
});

export default Congratulation;
