import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextProps {
	text: string;
	textColor: string;
}

const HeaderMiniText: FC<TextProps> = ({ textColor, text }) => {
	return (
		<Text style={{ ...styles.textStyle, color: textColor }}>{text}</Text>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
        textTransform: 'capitalize',
        marginBottom: 30
	},
});

export default HeaderMiniText;
