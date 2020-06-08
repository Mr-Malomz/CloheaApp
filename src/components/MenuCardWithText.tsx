import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

interface MenuProps {
	rightText: string;
	leftText?: string;
	leftTextSmall?: string;
	isSmallIcon: boolean;
	onPress: () => void;
	custStyles: any;
	Icon: any;
	IconName: string;
	SmallIcon?: any;
	SmallIconName?: any;
}

const MenuCardWithText: FC<MenuProps> = ({
	rightText,
	leftText,
	leftTextSmall,
	onPress,
	custStyles,
	Icon,
	IconName,
	isSmallIcon,
	SmallIcon,
	SmallIconName,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={{ ...styles.menuContainer, ...custStyles }}>
				<View style={styles.rightTextContainer}>
					<View style={styles.iconStyle}>
						<Icon name={IconName} size={24} color='white' />
					</View>
					<Text style={styles.rightTextStyle}>{rightText}</Text>
				</View>
				<View style={styles.leftTextContainer}>
					{isSmallIcon ? (
						<SmallIcon
							name={SmallIconName}
							size={24}
							color='white'
						/>
					) : (
						<Text style={styles.leftTextSmall}>
							{leftTextSmall}
						</Text>
					)}
					<Text style={styles.leftTextBig}>{leftText}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	menuContainer: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 0,
		paddingHorizontal: 15,
		height: 101,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30
	},
	rightTextContainer: {
		flexDirection: 'row',
	},
	iconStyle: {
		paddingRight: 15,
	},
	rightTextStyle: {
		fontWeight: 'bold',
		fontSize: 16,
		lineHeight: 20,
		color: '#ffffff',
	},
	leftTextContainer: {
		alignItems: 'center',
	},
	leftTextSmall: {
		fontWeight: '600',
		fontSize: 12,
		color: '#ffffff'
	},
	leftTextBig: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#ffffff'
	},
});

export default MenuCardWithText;
