import React from "react";
import {
  StyleSheet,  
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { alignItems } from "styled-system";
import PasswordInputText from 'react-native-hide-show-password-input';


export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          password: '',
        };
      }
    render(){
        const { password } = this.state;
    
    return (
        <View style={styles.signup}>
            <Text style={styles.header}>Create An Account</Text>
            <Text>Full Name</Text>
            <TextInput
                    style={styles.input}
                    placeholder="John Doe"
                    keyboardType="ascii-capable"
            />
             <Text>Email</Text>
            <TextInput
                    style={styles.input}
                    placeholder="johndoe@domain.com"
                    keyboardType='email-address'
            />
             <Text>Phone Number</Text>
            <TextInput
                    style={styles.input}
                    placeholder="412-123-4567"
                    keyboardType='phone-pad'
            />
            <Text>Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    />
            <Text>Confirm Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    />
            <Text>Role</Text>
            
            <TouchableOpacity style= {styles.button}>
                <Text style={styles.btntext}>SIGN UP</Text>
            </TouchableOpacity>

        </View>
        );
    }
} 

const styles = StyleSheet.create({
    signup:{
        alignSelf:'stretch',
    },
    header:{
        fontSize:40,
        fontWeight:'bold',
        paddingBottom:5,
        marginBottom:10,
    },
    input: {
        height: 40,
        marginBottom:10,
        borderWidth: 1,
        padding: 10,
      },
      button:{
          alignSelf:'stretch',
          alignItems:'center',
          padding:15,
          backgroundColor:'#21A656',
          marginTop:30,
          borderRadius:5,
      },
      btntext:{
          color:'#FFFFFF',
      },
});