import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';
import TextInputwithBG from '../../components/TextInputwithBG';
import CustomButton from '../../components/CustomButton';

const EmergencyContact = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<View style={styles.mainContent}>
					<HeaderMiniText
						text='emergency contact'
						textColor='#2671B8'
					/>
					<TextInputwithBG mainText='Phone Number' height={35} />
					<CustomButton
						text='save contact'
						onPress={() => console.log(123)}
						customStyleContaner={styles.buttonLogin}
						customStyleText={styles.buttonTextLogin}
					/>
				</View>
			</View>
		</SafeAreaView>
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
		// marginBottom: 60,
	},
	mainContent: {
        justifyContent: 'center',
        flex: 1,
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

export default EmergencyContact;
