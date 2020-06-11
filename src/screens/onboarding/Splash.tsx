import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SVG_one from '../../utils/svgs/SVG_one';
import SVG_two from '../../utils/svgs/SVG_two';
import CustomButton from '../../components/CustomButton';
import Swiper from 'react-native-web-swiper';
import { calcDivisionDimension } from '../../constants/calcDimension';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
	Splash: undefined;
	Login: undefined;
	Register: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash: FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image source={require('../../utils/images/cloheaLogo.jpg')} />
			<View style={styles.swiperContainer}>
				<Swiper controlsProps={{ nextTitle: '', prevTitle: '' }}>
					<View style={styles.svgContainer}>
						<SVG_one />
						<View style={styles.sliderContainer}>
							<Text style={styles.sliderTitle}>
								High quality health care at your{'\n'}{' '}
								fingertips
							</Text>
						</View>
					</View>
					<View style={styles.svgContainer}>
						<SVG_two />
						<View style={styles.sliderContainer}>
							<Text style={styles.sliderTitle}>
								Health care not limited to any time or place.
								{'\n'} Book an appointment at your own {'\n'}{' '}
								convinence any time of the day, {'\n'}from
								whereever you are.
							</Text>
						</View>
					</View>
				</Swiper>
			</View>
			<View style={styles.buttonContainer}>
				<CustomButton
					text='login'
					onPress={() => navigation.navigate('Login')}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
				/>
				<CustomButton
					text='Register'
					onPress={() => navigation.navigate('Register')}
					customStyleContaner={styles.buttonRegister}
					customStyleText={styles.buttonTextRegister}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: 110,
	},
	swiperContainer: { flex: 1, width: '100%' },
	svgContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		marginTop: 60,
	},
	sliderContainer: {
		marginTop: 60,
	},
	sliderTitle: {
		textAlign: 'center',
		fontWeight: '600',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 40,
		marginRight: 18,
		marginLeft: 18,
	},
	buttonLogin: {
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: calcDivisionDimension(2.4),
		marginRight: 9,
	},
	buttonTextLogin: {
		color: '#2671B8',
	},
	buttonRegister: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: calcDivisionDimension(2.4),
		marginLeft: 9,
	},
	buttonTextRegister: {
		color: '#ffffff',
	},
});

export default Splash;
