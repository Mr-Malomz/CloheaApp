import { Dimensions } from 'react-native';

//make calculation based on screen dimension
export const calcDivisionDimension = (num: number) =>
	Dimensions.get('window').width / num;
