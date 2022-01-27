import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';
export default class Notification extends Component {
  render() {
    return (
        <View style={Styles.container}>
            <Text>Notification screen</Text>
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
