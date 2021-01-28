import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

function TextComponent({ tAlign, tBold, tColor, tSize, txt, style }) {
    // tAlign, tBold, txt - string
    // tColor, style - custom SSheet
    // tSize - number

    let btsp = {
        color: tColor,
        fontSize: tSize,
        fontWeight: tBold,
        textAlign: tAlign
    };

    return (
        <Text style={[btsp, style]}>
            { txt}
        </Text>
    );
};

export default TextComponent;

TextComponent.propTypes = {
    txt: PropTypes.string.isRequired,
    tBold: PropTypes.string,
    tSize: PropTypes.number,
};

TextComponent.defaultProps = {
    txt: 'Text',
    tBold: '500',
    tSize: 15,
};