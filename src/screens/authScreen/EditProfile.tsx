import React from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import HeaderMiniText from '../../components/HeaderMiniText';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TextInputwithBG from '../../components/TextInputwithBG';
import CustomButton from '../../components/CustomButton';

const EditProfile = () => {
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
				<HeaderMiniText text='edit profile' textColor='#2671B8' />
				<TouchableOpacity style={styles.imageContainer}>
					<Image
						source={require('../../utils/images/download.jpg')}
						style={styles.imageStyle}
					/>
					<Text style={styles.imageText}>Tap to change</Text>
				</TouchableOpacity>
				<TextInputwithBG mainText='Surname' height={35} />
				<TextInputwithBG mainText='Firstname' height={35} />
				<TextInputwithBG mainText='Email' height={35} />
				<TextInputwithBG mainText='Phone Number' height={35} />
				<CustomButton
					text='update profile'
					onPress={() => console.log(123)}
					customStyleContaner={styles.buttonLogin}
					customStyleText={styles.buttonTextLogin}
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
	imageContainer: {
		display: 'flex',
		marginBottom: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageStyle: {
		borderWidth: 3,
		borderColor: '#2671B8',
		height: 72,
		width: 72,
		borderRadius: 50,
		marginRight: 15,
	},
	imageText: {
		opacity: 0.7,
		fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
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

export default EditProfile;
