import React, { FC } from 'react';
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerContentComponentProps,
	DrawerContentOptions,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
	prop: DrawerContentComponentProps<DrawerContentOptions>;
}

const DrawerContent: FC<Props> = ({ prop }) => {
	return (
		<View style={styles.container}>
			{/* <DrawerContentScrollView {...prop}> */}
				<Image
					source={require('../../utils/images/download.jpg')}
					style={styles.imageStyle}
				/>
			{/* </DrawerContentScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
        paddingHorizontal: 16,
        
	},
	imageStyle: {
		borderWidth: 3,
		borderColor: '#2671B8',
		height: 97,
		width: 97,
		borderRadius: 50,
	},
});

export default DrawerContent;
