import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import values from '../constants/default_values';
import TextCpn from '../components/TextComponent';
import PropTypes from 'prop-types';

function BtnComponent({ action, bg, borderColor, radius, txt, txtColor, width }) {
    return (
        <TouchableOpacity
            style={[
                btsp.btn,
                { backgroundColor: bg, borderColor: borderColor, borderRadius: radius, width: width }
            ]}
            onPress={action}
        >
            <TextCpn txt={txt} tBold={'600'} txtColor={txtColor} tAlign={'center'} />
        </TouchableOpacity>
    );
};

export default BtnComponent;

const btsp = StyleSheet.create({
    btn: {
        borderWidth: 1,
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 15
    }
});

BtnComponent.propTypes = {
    action: PropTypes.func,
    borderColor: PropTypes.string,
    radius: PropTypes.number,
    txt: PropTypes.string.isRequired,
    txtColor: PropTypes.string,
    width: PropTypes.number
};

BtnComponent.defaultProps = {
    width: values.WIDTH * 0.3,
};