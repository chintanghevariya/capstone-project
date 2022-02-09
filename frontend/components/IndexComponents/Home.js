import React from 'react';
import { Text,View,StyleSheet } from 'react-native'
import { Button } from 'native-base';
import {getToken} from '../../helpers/Token'
import {getUser} from '../../helpers/user'
import DashBoard from './HomeComponent/Home.DashBoard';

export default function Home() {
    return (
        <View style={Styles.container}>
            {/* <Text>Home screen</Text> */}
            {/* <Text>{JSON.stringlify(getUser().then(Value))}</Text> */}
            {/* <Button onPress={() => getUser().then((value) => alert(value))}>click me</Button>
            <Button onPress={() => getToken().then((value) => alert(value))}>click me</Button> */}
            <DashBoard/>
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
