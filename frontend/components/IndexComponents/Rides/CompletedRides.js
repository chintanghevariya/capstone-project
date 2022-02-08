import React from 'react';
import { Text,View,StyleSheet } from 'react-native'

export default function CompletedRides() {
    return (
        <View style={Styles.container}>
            <Text>Completed Rides</Text>
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
