import React, { FC } from 'react';
import { StyleSheet, View, Text, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface TextProps extends TextInputProps {
    mainText: string;
    height: number
}

const TextInputwithBG: FC<TextProps> = ({mainText, height}) => {
	return (
		<View style={styles.main}>
			<Text style={styles.mainText}>{mainText}</Text>
            <TextInput style={{...styles.container, height: height}}/>
		</View>
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
		backgroundColor: '#DCE8F4',
        borderRadius: 5,
        paddingHorizontal: 10
	},
});

export default TextInputwithBG;
