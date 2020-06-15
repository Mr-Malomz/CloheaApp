import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface MenuProps {
	titleText: string;
	hospitalName: string;
	schedule: string;
	Icon?: any;
	IconName?: any;
	bgColor: string;
    mainColor?: string;
    IconColor?: string
}

const NewAppointMenu: FC<MenuProps> = ({
	titleText,
	IconName,
	Icon,
	bgColor,
	mainColor,
	hospitalName,
    schedule,
    IconColor
}) => {
	return (
		<View style={[styles.container, { backgroundColor: bgColor }]}>
			<View style={styles.alertContainer}>
				<Text style={styles.mainText}>{titleText}</Text>
				<Icon name={IconName} size={24} color={mainColor && IconColor ? IconColor : mainColor} />
			</View>
			<View style={styles.alertContainer}>
				<Text style={styles.hospitalTxt}>{hospitalName}</Text>
				<Text style={[styles.scheduleTxt, { color: mainColor }]}>
					{schedule}
				</Text>
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
        marginBottom: 10
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
	scheduleTxt: {
		opacity: 0.7,
		fontSize: 10,
		fontWeight: '700',
	},
});

export default NewAppointMenu;
