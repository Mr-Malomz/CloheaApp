import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';

const FindDoctor = () => {
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
				<HeaderMiniText text='find a doctor' textColor='#27127B' />
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
});

export default FindDoctor;
