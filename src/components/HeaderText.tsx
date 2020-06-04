import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
	text: string;
	custStyle?: any
}

const HeaderText: FC<HeaderProps> = ({ text,  custStyle}) => {
	return <Text style={{...styles.textStyle, ...custStyle}}>{text}</Text>;
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#2671B8',
		marginBottom: 30,
		textTransform: 'capitalize',
	},
});

export default HeaderText;
