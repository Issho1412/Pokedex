import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import dvals from '../constants/default_values';
import colors from '../constants/colors';

class ItemHomeComponent extends Component {
    render() {
        const { link, title, srcImg, colorText } = this.props;

        return (
            <TouchableOpacity onPress={ link } style={btsp.container}>
                <Image source={srcImg} style={btsp.img} />
                <Text style={[btsp.txtTitle, { color: colorText }]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.colorWhite,
        borderWidth: 0.5,
        borderColor: colors.colorBlack,
        justifyContent: 'center',
        padding: dvals.padding / 4,
        width: dvals.WIDTH / 2,
    },
    img: {
        height: 60,
        width: dvals.WIDTH*0.47
    },
    txtTitle: {
        fontSize: 12,
        fontWeight: '700',
    }
});

export default ItemHomeComponent;