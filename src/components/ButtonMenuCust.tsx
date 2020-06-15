import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { calcDivisionDimension } from '../constants/calcDimension';

interface ButtonProps {
	text: string;
	isBorder: boolean;
	Icon?: any;
	IconName?: any;
	IconColor: string;
	onPress: () => void;
}

const ButtonMenuCust: FC<ButtonProps> = ({
	IconColor,
	isBorder,
	text,
	Icon,
	IconName,
	onPress,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={[
					styles.container,
					isBorder ? styles.containerBorder : null,
				]}
			>
				<Icon name={IconName} size={24} color={IconColor} />
				<Text style={isBorder ? styles.textStyle : styles.logOutStyle}>{text}</Text>
				<AntDesign name='right' size={24} color='#C0C0C0' />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: calcDivisionDimension(1.5),
		paddingBottom: 15,
		alignItems: 'center',
		marginBottom: 20,
	},
	containerBorder: {
		borderBottomColor: '#C0C0C0',
		borderBottomWidth: 2,
	},
	textStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
	logOutStyle: {
		opacity: 0.4,
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
});

export default ButtonMenuCust;
