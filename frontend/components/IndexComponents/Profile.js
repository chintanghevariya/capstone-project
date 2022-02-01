import React, { Component } from 'react';
import { View,StyleSheet,Text,Button,TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Profile({navigation}){

  const deleteToken=()=> {
    SecureStore.deleteItemAsync('token').then(
      navigation.navigate('Login'))
  }
    return (
        <View style={Styles.container}>
            <Text>Profile</Text>
        <TouchableOpacity onPress={()=>deleteToken()}><Text> Sign out</Text></TouchableOpacity>
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


