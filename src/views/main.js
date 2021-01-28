import React, { Component } from 'react';
import { FlatList, ImageBackground, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import dvals from '../constants/default_values';
import ItemHome from '../components/ItemHomeComponent';
import TextCpn from '../components/TextComponent';
import ImgCpn from '../components/ImgComponent';
import BtnCpn from '../components/BtnComponent';
import getImage from '../functions/getImage';
import colors from '../constants/colors';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstItems: dvals.ITEMS_HOME,
        };
    }

    directItem = route => {
        this.props.navigation.navigate(route);
    };

    render() {
        const LST_ITEM = this.state.lstItems;
        const renderItem = ({ item }) => (
            <ItemHome
                title={item.title}
                srcImg={item.src}
                colorText={item.color}
                link={() => { this.directItem(item.link) }}
            />
        );

        return (
            <SafeAreaView style={[dvals.btsp.container, btsp.bgBlack]}>
                <ImageBackground source={getImage('Home')} style={btsp.img}>
                    <View style={btsp.logo}>
                        <ImgCpn
                            dirUrl={getImage('SplashScreen')}
                            height={100}
                            width={dvals.WIDTH * 0.3}
                        />
                        <BtnCpn
                            bg={colors.colorWhite}
                            borderColor={colors.colorLightBlack}
                            txt={'Search'}
                            radius={10}
                            action={() => { this.directItem('Search') }}
                        />
                    </View>

                    <TextCpn
                        tAlign={'center'}
                        tBold={'bold'}
                        tColor={'black'}
                        tSize={35}
                        txt={'GENERATION'}
                    />

                    <FlatList
                        numColumns='2'
                        data={LST_ITEM}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const btsp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        resizeMode: 'stretch',
        height: 'auto',
        width: dvals.WIDTH,
    },
    logo: {
        alignItems: 'center',
        marginVertical: 10
    },
    txtBody: {
        fontWeight: '700',
        fontSize: dvals.fontSize
    }
});


export default Main;