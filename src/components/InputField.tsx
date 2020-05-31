import React from 'react';
import {
	TextInput,
	TextInputProps,
	StyleSheet,
	View,
	Text,
} from 'react-native';

interface InputProps extends TextInputProps {
	custStye?: any;
	label: string;
}

const InputField = (props: InputProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput
				{...props}
				style={{ ...styles.input, ...props.custStye }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
        width: '100%',
        marginBottom: 30
	},
	label: {
		fontWeight: '500',
		fontSize: 12,
		lineHeight: 15,
		textTransform: 'capitalize',
	},
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
        width: '100%',
	},
});

export default InputField;
