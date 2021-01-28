import { Dimensions, StyleSheet } from 'react-native';
import getImage from '../functions/getImage';
import colors from './colors';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const ITEMS_HOME = [
    { key: "1", color: colors.colorBlack, link: 'GenOne', title: 'GEN 1', src: getImage('Kanto') },
    { key: "2", color: colors.colorBlack, link: '', title: 'GEN 2', src: getImage('Johto') },
    { key: "3", color: colors.colorBlack, link: '', title: 'GEN 3', src: getImage('Hoenn') },
    { key: "4", color: colors.colorBlack, link: '', title: 'GEN 4', src: getImage('Sinnoh') },
    { key: "5", color: colors.colorBlack, link: '', title: 'GEN 5', src: getImage('Unova') },
    { key: "6", color: colors.colorBlack, link: '', title: 'GEN 6', src: getImage('Kalos') },
    { key: "7", color: colors.colorBlack, link: '', title: 'GEN 7', src: getImage('Alola') },
    { key: "8", color: colors.colorBlack, link: '', title: 'GEN 8', src: getImage('Galar') },
];

const btsp = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1, 
        justifyContent: 'flex-start'
    },

    imgLogo: {
        height: HEIGHT * 0.3,
        width: WIDTH * 0.75,
        resizeMode: 'stretch'
    },

    txtTitle: {
        color: colors.colorTextTitle,
        fontWeight: '700',
    }
});

export default {
    ITEMS_HOME,
    HEIGHT, 
    WIDTH,
    btsp,
    borderRadius: 5,
    marginVertical: 30,
    marginHorizontal: 30,
    ffamily: '',
    fontSize: 18,
    lrg_FontSize: 50, 
    padding: 30
}