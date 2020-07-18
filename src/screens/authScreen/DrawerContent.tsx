import React, { FC } from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentOptions,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { calcDivisionDimension } from '../../constants/calcDimension';
import ButtonMenuCust from '../../components/ButtonMenuCust';
import {
	MaterialCommunityIcons,
	Entypo,
	Feather,
	Ionicons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props {
	prop: DrawerContentComponentProps<DrawerContentOptions>;
}

const DrawerContent: FC<Props> = ({ prop }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			{/* <DrawerContentScrollView {...prop}> */}
			<Image
				source={require('../../utils/images/download.jpg')}
				style={styles.imageStyle}
			/>
			<Text style={styles.mainText}>Ogunlana Tope</Text>
			<CustomButton
				text='edit profile'
				onPress={() => console.log(124)}
				customStyleContaner={styles.buttonLogin}
				customStyleText={styles.buttonTextLogin}
			/>
			<ButtonMenuCust
				text='emgy. contact'
				isBorder={true}
				onPress={() => navigation.navigate('EmergencyContact')}
				Icon={Entypo}
				IconName='squared-plus'
				IconColor='#2671B8'
			/>
			<ButtonMenuCust
				text='about clohea'
				isBorder={true}
				onPress={() => console.log(124)}
				Icon={Feather}
				IconName='info'
				IconColor='#2671B8'
			/>
			<ButtonMenuCust
				text='contact us'
				isBorder={true}
				onPress={() => console.log(124)}
				Icon={Ionicons}
				IconName='md-chatboxes'
				IconColor='#2671B8'
			/>
			<ButtonMenuCust
				text='log out'
				isBorder={false}
				onPress={() => console.log(124)}
				Icon={MaterialCommunityIcons}
				IconName='power'
				IconColor='#C0C0C0'
			/>
			{/* </DrawerContentScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 16,
	},
	imageStyle: {
		borderWidth: 3,
		borderColor: '#2671B8',
		height: 97,
		width: 97,
		borderRadius: 50,
		marginBottom: 20,
	},
	mainText: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 20,
	},
	buttonLogin: {
		backgroundColor: '#2671B8',
		borderColor: '#2671B8',
		borderWidth: 2,
		borderStyle: 'solid',
		width: calcDivisionDimension(3),
		marginBottom: 60,
	},
	buttonTextLogin: {
		color: '#ffffff',
	},
});

export default DrawerContent;
