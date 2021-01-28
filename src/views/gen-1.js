import React, { Component } from 'react';
import { View, Text } from 'react-native';
import helper from '../functions/helperAPI';
import apis from '../constants/APIs';

export default class GenOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            start: 1,
            end: 151
        }
    }

    render() {
        return (
            <View>
                <Text>Gen1</Text>
            </View>
        )
    }

    componentDidMount() {
       
    }
}