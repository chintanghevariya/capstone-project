import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import FilterRide from'./SearchComponent/FilterRide'
export default function Search(){

    return (
        <View style={Styles.container}>
            <FilterRide/>
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
