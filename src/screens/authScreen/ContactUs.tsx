import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderMiniText from '../../components/HeaderMiniText';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { calcDivisionDimension } from '../../constants/calcDimension';
import { FontAwesome5, Feather } from '@expo/vector-icons';

const SocialsBtn = (props: {
	bgColor: string;
	Icon: any;
	IconName: string;
	mainText: string;
}) => (
	<TouchableOpacity>
		<View style={{ ...styles.socialsWrap, backgroundColor: props.bgColor }}>
			<props.Icon name={props.IconName} size={24} color='white' />
			<Text style={styles.socialText}> {props.mainText}</Text>
		</View>
	</TouchableOpacity>
);

const ContactUs = () => {
	const navigation = useNavigation();
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<HeaderMiniText text='contact us' textColor='#2671B8' />
				<Text style={styles.textStyle}>
					You can reach us via any of our details below
				</Text>

				<View style={styles.copyContainer}>
					<Text style={styles.mainText}>phone number</Text>
					<View style={styles.copyMain}>
						<View style={styles.copyTextWrap}>
							<Text style={styles.copyText}>08045678946</Text>
						</View>
						<TouchableOpacity>
							<View style={styles.buttonWrap}>
								<Text
									style={{
										...styles.copyText,
										color: '#ffffff',
										textTransform: 'capitalize',
									}}
								>
									copy
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.copyContainer}>
					<Text style={styles.mainText}>email</Text>
					<View style={styles.copyMain}>
						<View style={styles.copyTextWrap}>
							<Text style={styles.copyText}>
								hello@clohea.com
							</Text>
						</View>
						<TouchableOpacity>
							<View style={styles.buttonWrap}>
								<Text
									style={{
										...styles.copyText,
										color: '#ffffff',
										textTransform: 'capitalize',
									}}
								>
									copy
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.addressBtnWrap}>
					<FontAwesome5 name='home' size={24} color='black' />
					<Text style={{ marginLeft: 15 }}>
						Block 34 Adisa Bashua Street, Sururele, {'\n'}Lagos
						State.
					</Text>
				</View>

				<SocialsBtn
					mainText='Connect on Facebook'
					bgColor='#548FC7'
					Icon={Feather}
					IconName='facebook'
				/>
                <SocialsBtn
                    mainText='Connect on twitter'
                    bgColor='#55ACEE'
                    Icon={Feather}
                    IconName='twitter'
                />
                <SocialsBtn
                    mainText='Connect on Instagram'
                    bgColor='#DD2A7B'
                    Icon={Feather}
                    IconName='instagram'
                />
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
	textStyle: {
		fontSize: 11,
		textAlign: 'center',
		marginBottom: 30,
	},
	copyContainer: {
		marginBottom: 30,
	},
	copyMain: {
		display: 'flex',
		flexDirection: 'row',
	},
	copyTextWrap: {
		borderColor: '#2671B8',
		borderWidth: 1,
		height: 35,
		width: '80%',
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 15,
		borderTopLeftRadius: 5,
	},
	copyText: {
		fontWeight: 'bold',
	},
	buttonWrap: {
		backgroundColor: '#2671B8',
		width: calcDivisionDimension(5.3),
		height: 35,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},
	mainText: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.7)',
		fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
		marginBottom: 10,
		textTransform: 'capitalize',
	},
	addressBtnWrap: {
		borderColor: '#2671B8',
		borderWidth: 1,
		height: 59,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: 15,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		marginBottom: 30,
		flexDirection: 'row',
	},
	socialsWrap: {
		display: 'flex',
		height: 45,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 30
	},
	socialText: {
		color: '#ffffff',
		fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 15
	},
});

export default ContactUs;
