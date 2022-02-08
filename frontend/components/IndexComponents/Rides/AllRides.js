import React from 'react';
import { Text,View,StyleSheet } from 'react-native'


export default function AllRides() {
    return (
        <View style={Styles.container}>
            <Text>All Rides</Text>
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
