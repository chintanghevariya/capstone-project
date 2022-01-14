import React from "react";
import {
  StyleSheet,  
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          fullname: "",
          email:"",
          phonenumber:"",
          password: "",
          confirmpassword:"",
        }
      }
      validate=()=>
      {
        const{fullname,email,phonenumber,password,confirmpassword}=this.state
        if(fullname=="")
        {
          alert("Please Enter Full Name")
          return false
        }
         if(email=="")
        {
          alert("Please Enter email")
          return false
        }
         if(typeof email!== "undefined")
        {
           let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if(!pattern.test(email))
          {
            alert("Please valid Enter email")
            return false
          }
        }
         if(phonenumber=="")
        {
          alert("Please Enter phone")
          return false
        }
        if (typeof phonenumber!== "undefined") 
        {
          let pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(phonenumber)) {
            alert("Please enter only number.")
            return false;
          }else if(phonenumber.length != 10){
            alert("Please enter valid phone number.")
            return false;
          }
        }


         if(password==""){

          alert("Please Enter password")
          return false
        }
        if (typeof password !== "undefined") {
          if(password.length < 6){
            alert("Please add at least 6 character.");
            return false
          }
        }
         if(confirmpassword=="")
        {
          alert("Please Enter confirm password")
          return false
        }
        if (typeof password!== "undefined" && typeof confirmpassword!== "undefined") {
          
          if (password!=confirmpassword) {
            alert("Passwords don't match.");
            return false;
          }
        }
        return true
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
                    onChangeText = {(value)=>this.setState({fullname :value})} 
            />
             <Text>Email</Text>
            <TextInput
                    style={styles.input}
                    placeholder="johndoe@domain.com"
                    keyboardType='email-address'
                    onChangeText = {(value)=>this.setState({email :value})} 

            />
             <Text>Phone Number</Text>
            <TextInput
                    style={styles.input}
                    placeholder="412-123-4567"
                    keyboardType='phone-pad'
                    onChangeText = {(value)=>this.setState({phonenumber :value})} 

            />
            <Text>Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    onChangeText = {(value)=>this.setState({password :value})} 

                    />
            <Text>Confirm Password</Text>
            <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    onChangeText = {(value)=>this.setState({confirmpassword :value})} 

                    />
            <Text>Role</Text>
            <TouchableOpacity style= {styles.button}
            onPress={()=>this.validate()}>
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