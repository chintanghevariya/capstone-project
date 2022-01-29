import React from 'react';
import { View,StyleSheet } from 'react-native'
import { Button } from 'native-base';
import Token from '../Token'

export default function Home() {
    
    return (
        <View style={Styles.container}>
            <Button onPress={()=>Token('token')}>click me</Button>
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
