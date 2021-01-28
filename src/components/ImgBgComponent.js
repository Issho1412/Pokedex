import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import dvals from '../constants/default_values';
import getImage from '../functions/getImage';
import PropTypes from 'prop-types';

function ImgBgComponent({ text, url }) {
    return (
        <ImageBackground source={getImage('Home')} style={[btsp.img, btsp.container]}>
            <Text style={btsp.txtBody}> {text} </Text>
        </ImageBackground>
    )
};

export default ImgBgComponent;

ImgBgComponent.propTypes = {
    text: PropTypes.string,
};

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    img: {
        height: dvals.HEIGHT,
        width: dvals.WIDTH,
    },
    txtBody: {
        fontWeight: '700',
        fontSize: dvals.fontSize
    }
});