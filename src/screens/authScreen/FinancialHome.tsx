import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
	ScrollView,
	TouchableOpacity,
	FlatList,
} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';

const FinancialHome = () => {
	const navigation = useNavigation();

	const data = [
		{
			desc: 'Malaria & Typhoid',
			date: '20 - 01 - 2019',
			amount: '₦ 5,000',
		},
		{ desc: 'Testing', date: '20 - 01 - 2019', amount: '₦ 5,000' },
		{ desc: 'Laboratory', date: '20 - 01 - 2019', amount: '₦ 5,000' },
		{ desc: 'Typhord', date: '20 - 01 - 2019', amount: '₦ 5,000' },
		{
			desc: 'Malaria & Typhoid',
			date: '20 - 01 - 2019',
			amount: '₦ 5,000',
		},
		{
			desc: 'Malaria & Typhoid',
			date: '20 - 01 - 2019',
			amount: '₦ 5,000',
		},
	];

	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<HeaderMiniText text='financial history' textColor='#096A77' />
				<View>
					<View style={styles.tableContainer}>
						<Text style={styles.tableText}>description</Text>
						<Text style={styles.tableText}>date</Text>
						<Text style={styles.tableText}>amount</Text>
					</View>
					<FlatList
						data={data}
						renderItem={({ item, index }) => (
							<View style={{...styles.listContainer, backgroundColor: colorSelect[index % 2]}}>
								<Text style={styles.listItem}>{item.desc}</Text>
								<Text style={styles.listItem}>{item.date}</Text>
								<Text style={styles.listItem}>
									{item.amount}
								</Text>
							</View>
						)}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const colorSelect: string[] = ['#F9F9F9', 'E1E3E3']

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
	tableContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		width: '100%',
	},
	tableText: {
		color: '#9F9F9F',
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	listContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		height: 35,
		alignItems: 'center',
	},
	listItem: {
		color: '#000000',
		fontSize: 12,
		fontWeight: '500',
		width: '42%',
	},
});

export default FinancialHome;
