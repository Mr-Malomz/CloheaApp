import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

interface MenuProps {
    rightText: string;
    onPress: () => void;
    custStyles: any;
    Icon?: any;
    IconName?: any;
    Svg: any
}

const MenuCardWithIcon: FC<MenuProps> = ({
    rightText,
    onPress,
    custStyles,
    Icon,
    IconName,
    Svg
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
                    <Svg />
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
        transform: [{translateY: -25}]
    },
});

export default MenuCardWithIcon;
