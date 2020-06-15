import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

interface MenuProps {
	titleText: string;
	hospitalName: string;
	bgColor: string;
}

const PendingAppointMenu: FC<MenuProps> = ({
	titleText,
	bgColor,
	hospitalName,
}) => {
	return (
		<View style={[styles.container, { backgroundColor: bgColor }]}>
			<View style={styles.alertContainer}>
				<Text style={styles.mainText}>{titleText}</Text>
                <SimpleLineIcons name='hourglass' size={24} color='#514194' />
			</View>
			<View style={styles.alertContainer}>
				<Text style={styles.hospitalTxt}>{hospitalName}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 56,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 0,
		paddingHorizontal: 10,
		justifyContent: 'center',
		marginBottom: 10,
	},
	alertContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	mainText: {
		opacity: 0.7,
		fontSize: 12,
		fontWeight: '700',
		textTransform: 'capitalize',
	},
	hospitalTxt: {
		opacity: 0.7,
		fontSize: 10,
		fontWeight: '700',
	},
});

export default PendingAppointMenu;
