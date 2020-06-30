import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderMiniText from '../../components/HeaderMiniText';

const MedicalDetails = () => {
	const navigation = useNavigation();
	return (
		<ScrollView>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.arrowStyle}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name='arrowleft' size={24} color='black' />
				</TouchableOpacity>
				<HeaderMiniText text='medical history' textColor='#2A9CAC' />
				<View style={styles.detailContainer}>
					<View style={styles.detailHeader}>
						<Text style={styles.headerText}>Malaria & Typhord</Text>
						<Text style={styles.headerText}>20 - 01 - 2019</Text>
					</View>
					<View style={styles.detWrapper}>
						<View style={styles.headerWrapper}>
							<View>
								<Text style={styles.hwrapText}>
									Attending Doctor
								</Text>
								<Text style={styles.drname}>
									DR. Orimolade Joseph
								</Text>
								<Text style={styles.drdetail}>
									PHD, MBBS - Cardiologist
								</Text>
							</View>
							<View>
								<Text style={styles.hwrapText}>
									Treatment {'\n'} Duration
								</Text>
								<Text style={styles.drname}>2 Weeks</Text>
							</View>
						</View>
					</View>
					<View style={styles.detWrapper}>
						<View style={styles.headerWrapper}>
							<Text style={styles.hwrapText}>Prescription</Text>
							<Text style={styles.hwrapText}>Dosage</Text>
						</View>
						<View style={styles.headerWrapper}>
							<View style={styles.dosagewrp}>
								<View style={styles.rounded}></View>
								<Text style={styles.drname}>
									250mg Amoxilin
								</Text>
							</View>
							<Text style={styles.drname}>1 - 1 - 1</Text>
						</View>
						<View style={styles.headerWrapper}>
							<View style={styles.dosagewrp}>
								<View style={styles.rounded}></View>
								<Text style={styles.drname}>
									500mg sulfamethoxazole{'\n'} and
									trimethoprim
								</Text>
							</View>
							<Text style={styles.drname}>2 - 2</Text>
						</View>
					</View>
					<View style={styles.infoContainer}>
						<Text style={{ ...styles.hwrapText, marginBottom: 10 }}>
							Doctor’s Comment
						</Text>
						<Text style={styles.infoDetails}>
							Patient exhibit signs of fever high fever, headache,
							stomach pain and either constipation or diarrhoea.
							Syptoms of headache, muscle weakness, rash with
							small red dots, skin rash, or weight loss
						</Text>
					</View>
                    <View style={styles.infoContainer}>
                        <Text style={{ ...styles.hwrapText, marginBottom: 10 }}>
                            Follow-Up Checkup
						</Text>
                        <Text style={styles.drname}>None</Text>
                    </View>
				</View>
			</View>
		</ScrollView>
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
	detailContainer: {
		width: '100%',
		borderWidth: 1,
		borderColor: '#2A9CAC',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 0,
		paddingBottom: 30,
	},
	detailHeader: {
		backgroundColor: '#2A9CAC',
		height: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		borderTopLeftRadius: 19,
		borderTopRightRadius: 19,
		alignItems: 'center',
		marginBottom: 30,
	},
	headerText: {
		color: '#ffffff',
		fontSize: 12,
		fontWeight: 'bold',
	},
	detWrapper: {
		marginBottom: 30,
	},
	headerWrapper: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		justifyContent: 'space-between',
	},
	hwrapText: {
		color: 'rgba(0, 0, 0, 0.5)',
		fontWeight: '600',
		fontSize: 12,
		marginBottom: 10,
	},
	drname: {
		fontSize: 14,
		fontWeight: '500',
		color: '#000000',
	},
	drdetail: {
		color: 'rgba(0, 0, 0, 0.5)',
		fontWeight: '600',
		fontSize: 14,
	},
	dosagewrp: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rounded: {
		height: 7,
		width: 7,
		backgroundColor: '#2A9CAC',
		borderRadius: 50,
		marginRight: 15,
	},
	infoContainer: {
        paddingHorizontal: 15,
        marginBottom: 30
    },
    infoDetails: {
        fontSize: 12,
        textAlign: 'justify'
    }
});

export default MedicalDetails;
