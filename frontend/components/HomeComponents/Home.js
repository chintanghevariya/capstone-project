import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
        <View style={Styles.container}>
            <Text>Home Screen</Text>
            <Text>Welcome to our app</Text>
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
