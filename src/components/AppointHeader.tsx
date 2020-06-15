import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderProps {
	text: string;
	fontColor: string;
	onPress: () => void;
}

const AppointHeader: FC<HeaderProps> = ({ fontColor, text, onPress }) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<View
					style={[styles.rounded, { borderColor: fontColor }]}
				></View>
				<Text style={styles.mainText}>{text}</Text>
			</View>
			<TouchableOpacity onPress={onPress}>
				<Text style={[styles.buttonText, { color: fontColor }]}>
					view all
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 30,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rounded: {
		width: 13,
		height: 13,
		borderWidth: 3,
		borderRadius: 50,
		marginRight: 15,
	},
	mainText: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default AppointHeader;
