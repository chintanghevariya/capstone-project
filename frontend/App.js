import React from "react";
import {
  StyleSheet,  
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Signup from "./Signup";
export default class App extends React.Component{
    render(){
        return (
        <View style={styles.container}>
          <Signup/>
        </View>
        );
    }
} 
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      paddingLeft:60,
      paddingRight:60,
    },
});