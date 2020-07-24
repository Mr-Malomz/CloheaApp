import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';

const AboutUs = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.arrowStyle}
				onPress={() => navigation.goBack()}
			>
				<AntDesign name='arrowleft' size={24} color='black' />
			</TouchableOpacity>
			<HeaderMiniText text='about us' textColor='#2671B8' />
			<Text style={styles.textStyle}>
				Clohea is a complete Hospital Information System that supports{' '}
				{'\n'}
				customization and continuous integration..{' '}
			</Text>
            <TouchableOpacity style={styles.detailLink}>
                <Text style={styles.detailFont}>FAQs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailLink}>
                <Text style={styles.detailFont}>Why Clohea</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailLink}>
                <Text style={styles.detailFont}>Rate & Review Clohea App</Text>
            </TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16,
		paddingTop: 37,
	},
	arrowStyle: {
		marginBottom: 60,
	},
	textStyle: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 30
    },
    detailLink: {
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderColor: '#C0C0C0',
        marginBottom: 30
    },
    detailFont: {
        fontWeight: 'bold'
    }
});

export default AboutUs;
