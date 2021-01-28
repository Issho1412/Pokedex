import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

function ImgComponent({ dirUrl, radius, height, width }) {
    return (
        <Image source={dirUrl}
            style={{ height: height, width: width, borderRadius: radius, resizeMode: 'stretch' }}
        />
    );
};

export default ImgComponent;

ImgComponent.propTypes = {
    dirUrl: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};