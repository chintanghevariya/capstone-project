import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';

export default class Search extends Component {
  render() {
    return (
        <View style={Styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
