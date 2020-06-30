import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

interface ButtonProps {
	text: string;
	isIcon: boolean;
	onPress: () => void;
	bgColor: string;
	isDropdown?: boolean;
}

const ButtonMini: FC<ButtonProps> = ({
	bgColor,
	isIcon,
	onPress,
	text,
	isDropdown,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={{ ...styles.container, backgroundColor: bgColor }}>
				{isIcon &&
					(!isDropdown ? (
						<Entypo name='plus' size={24} color='white' />
					) : (
						<AntDesign name='minus' size={24} color='white' />
					))}
				<Text style={styles.textStyle}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 0,
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		width: '45%',
	},
	textStyle: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#ffffff',
		marginLeft: 15,
	},
});

export default ButtonMini;
