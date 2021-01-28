import React, { Component } from 'react';
import { ImageBackground, KeyboardAvoidingView, View, Text, StyleSheet } from 'react-native';
import TextCpn from '../components/TextComponent';
import InputCpn from '../components/TextInputComponent';
import ImgCpn from '../components/ImgComponent';
import helper from '../functions/helperAPI';
import dvals from '../constants/default_values';
import apis from '../constants/APIs';
import getImage from '../functions/getImage';
import getType from '../functions/getType';
import colors from '../constants/colors';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ability: '',
            error: false,
            link_img: '',
            id: '',
            name: '',
            type: [],
            species: '',
            search: 'pikachu'
        }
    }

    handleChangeText = (search) => { this.setState({ search }); }

    handleGetInfoPKM = () => {
        var id_pkm = this.state.search.toLowerCase();
        this.setState({ search: id_pkm });
        helper.FetchGetAPI(`${apis.BASE_URL}/${id_pkm}`, '', null, (res, error) => {
           
            if (res.error) {
                this.setState({ error: true });
            }
            else {
                this.setState({ ability: res.data[0].abilities.normal[0] });
                this.setState({ error: false });
                this.setState({ id: res.data[0].number });
                this.setState({ link_img: res.data[0].sprite });
                this.setState({ name: res.data[0].name });
                this.setState({ species: res.data[0].species});
                this.setState({ type: res.data[0].types });
            }
        });
    };

    render() {
        const { id, name, ability, type, link_img, error, species} = this.state;
        return (
            <KeyboardAvoidingView style={[dvals.btsp.container, btsp.bgBlack]}>
                <TextCpn
                    tAlign={'center'}
                    tBold={'bold'}
                    tColor={'black'}
                    tSize={20}
                    txt={'Find Your Pokemon'}
                />
                <InputCpn
                    backgroundColor={colors.colorWhite}
                    onChangeText={this.handleChangeText}
                    onSubmit={this.handleGetInfoPKM}
                    placeHolder={'Search ....'}
                    width={dvals.WIDTH * 0.8}
                />
                <ImageBackground source={getImage('Pkd')} style={btsp.img}>
                    {
                        error ? <TextCpn txt='Not Found This Pokemon' tSize={17} tBold={'bold'} /> : null
                    }

                    {
                        !error ? <ImgCpn
                            dirUrl={{ uri: link_img }} height={dvals.HEIGHT * 0.15} width={dvals.WIDTH * 0.25}
                        /> : null
                    }

                    {
                        error ? null
                            : <View style={btsp.detail}>
                                <Text style={btsp.txtBold}>
                                    ID: <TextCpn txt={id} />
                                </Text>
                                <Text style={btsp.txtBold}>
                                    Name: <TextCpn txt={name} />
                                </Text>
                                <Text style={btsp.txtBold}>
                                    Species: <TextCpn txt={species} />
                                </Text>
                                <Text style={btsp.txtBold}>
                                    Ability: <TextCpn txt={ability} />
                                </Text>
                                <Text style={btsp.txtBold}>
                                    Type:
                            {
                                        type.map((index) => (
                                            <View style={[{ backgroundColor: getType(index.toLowerCase()) }, btsp.brder]}>
                                                <TextCpn txt={index} tColor={'white'}
                                                    tBold={'bold'}
                                                    tSize={10}
                                                    style={btsp.type}
                                                />
                                            </View>
                                        ))
                                    }
                                </Text>
                            </View>
                    }

                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }

    componentDidMount() {
        this.handleGetInfoPKM();
    }
}

const btsp = StyleSheet.create({
    bgBlack: {
        backgroundColor: '#00A2A6'
    },
    brder: {
        borderRadius: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detail: {
        padding: 10,
    },
    img: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxHeight: dvals.HEIGHT * 0.75,
        width: dvals.WIDTH - 50,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    txtBody: {
        fontWeight: '700',
        fontSize: dvals.fontSize
    },
    txtBold: {
        fontWeight: 'bold',
    },
    type: {
        padding: 2.5,
        marginHorizontal: 1.5
    }
});

export default Search; 