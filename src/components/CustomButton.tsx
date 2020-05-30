import React, { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface ButtonProps {
	text: string;
	onPress: () => void;
	customStyleContaner?: any;
	customStyleText?: any;
}

const CustomButton: FC<ButtonProps> = ({
	text,
	onPress,
	customStyleContaner,
	customStyleText,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={{ ...styles.buttonContainer, ...customStyleContaner }}>
				<Text style={{...styles.buttonText, ...customStyleText}}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 0,
        paddingVertical: 10,
	},
	buttonText: {
		fontSize: 14,
		textTransform: 'capitalize',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

export default CustomButton;
