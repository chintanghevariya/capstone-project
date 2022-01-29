import React from 'react';
import { Text,View,StyleSheet } from 'react-native'
import { Button } from 'native-base';
import getToken from '../../helpers/Token'

export default function Home() {
    return (
        <View style={Styles.container}>
            <Button onPress={() =>getToken()}>click me</Button>
        </View>
    );
    }

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
