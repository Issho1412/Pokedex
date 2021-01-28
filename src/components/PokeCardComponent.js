import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import values from '../constants/default_values';
import TextCpn from '../components/TextComponent';
import PropTypes from 'prop-types';

class PokeCardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { action, borderColor, radius, txt, txtColor, width } = this.props;
        return (
            <TouchableOpacity 
                style={[ 
                    btsp.btn, 
                    { borderColor: borderColor, borderRadius: radius, width: width }  
                ]}
                onPress = { action }    
            >
                <TextCpn txt={txt} tBold={'600'} txtColor={txtColor} tAlign={'center'} />
            </TouchableOpacity>
        );
    }
}

const btsp = StyleSheet.create({
    btn: {
       borderWidth: 1,
       paddingVertical: 5,
       paddingHorizontal: 15
    }
});

PokeCardComponent.propTypes = {
    action: PropTypes.func,
    borderColor: PropTypes.string, 
    radius: PropTypes.number, 
    txt: PropTypes.string.isRequired, 
    txtColor: PropTypes.string, 
    width: PropTypes.number
};

PokeCardComponent.defaultProps = {
    width: values.WIDTH * 0.3,
};

export default PokeCardComponent;