import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DateProps {
    mainText: string;
    miniText: string;
    onPress: () => void;
    bgColor: string
}

const DateInputField: FC<DateProps> = ({bgColor, mainText, miniText, onPress}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.main}>
				<Text style={styles.mainText}>{mainText}</Text>
				<View style={{ ...styles.container, backgroundColor: bgColor }}>
					<Feather name='calendar' size={24} color='#6E747A' />
					<Text style={styles.text}>{miniText}</Text>
					<AntDesign name='caretdown' size={24} color='#6E747A' />
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	main: {
		width: '100%',
		marginBottom: 30,
	},
	mainText: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.7)',
		fontWeight: '600',
		marginBottom: 10,
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 35,
        alignItems: 'center',
        paddingHorizontal: 10
	},
	text: {
		color: '#6E747A',
	},
});

export default DateInputField;
