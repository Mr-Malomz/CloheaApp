import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
	text: string;
}

const HeaderText: FC<HeaderProps> = ({ text }) => {
	return <Text style={styles.textStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 24,
		fontWeight: '800',
		color: '#2671B8',
		marginBottom: 30,
		textTransform: 'capitalize',
	},
});

export default HeaderText;
