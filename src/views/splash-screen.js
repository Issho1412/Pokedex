import React, { Component } from 'react';
import { Animated, Image, View, Text, StyleSheet } from 'react-native';
import getImage from '../functions/getImage';
import colors from '../constants/colors';
import cvalues from '../constants/default_values';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            heightZoom: new Animated.Value(0),
            widthZoom: new Animated.Value(0),
        }
    }

    zoomIn = () => {
        Animated.timing(this.state.widthZoom, {
            toValue: cvalues.WIDTH * 0.8,
            duration: 2000,
            useNativeDriver: false
        }).start();

        Animated.timing(this.state.heightZoom, {
            toValue: cvalues.WIDTH * 0.8,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    loadingSplashEnd = async () => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('result') },
                2001
            )
        )
    }

    render() {
        const { heightZoom, widthZoom } = this.state;

        return (
            <View style={btsp.container}>
                <Animated.Image  style={{width: widthZoom, height: heightZoom, resizeMode: 'stretch'}}
                    source={getImage('SplashScreen')}
                >
                </Animated.Image>
            </View>
        );
    }

    async componentDidMount() {

        this.zoomIn();

        var direct = await this.loadingSplashEnd();
        if (direct != null) {
            this.props.navigation.navigate('Main');
        }
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    textStyles: {
        borderWidth: 5,
        borderColor: colors.colorCyBlue,
        color: colors.colorSplash,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default SplashScreen;