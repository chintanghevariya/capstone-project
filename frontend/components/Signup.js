import React from "react";
import { Button, Input, Row } from 'native-base'
import {
  StyleSheet,  
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";
import  RadioForm from 'react-native-simple-radio-button';
import { flex } from "styled-system";

var radio_props = [
  {label: 'Driver', value: 0 },
  {label: 'Passenger', value: 1 }
];

export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          fnameValidate:false,
          lnameValidate:false,
          email:"",
          emailValidate:false,
          phonenumber:"",
          numValidate:false,
          password: "",
          passValidate:false,
          tempPassword:"",
          error:'',
          isError : false,
          submitButton : false,
          tempConfirmPassword:"",
          changedPassword:"",
          role:"",
          tester:false,
          
        }
      }
      
      handleFirstName =(text)=>{
        if(text.trim() === ""){
          this.setState({
            error:"Please enter First Name",
            isError:true,
            submitButton:false,
            fnameValidate:false
          })
          return false
        }
        if(this.state.numValidate&&this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:true})
        }
        else{
          this.setState({
            isError:false,
            submitButton:true,
            firstname:text,
            error:"",
            fnameValidate:true
          })
          // if (1>0){
          //   Alert.alert(` 
          //   -${this.state.fnameValidate}
          //   `)
          // }
          return true
        }
    }

      handleLastName =(text)=>{
        if(text.trim() === ""){
          this.setState({
            error:"Please enter Last Name",
            isError:true,
            submitButton:false,
            lnameValidate:false
          })
          return false
        }
        if(this.state.numValidate&&this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:true})
        }
        else{
          this.setState({
            submitButton:true,
            isError:false,
            lastname:text,
            error:"",
            lnameValidate:true,
          })
          return true
        }
    }
    handleEmail =(text)=>{
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(text)){
          this.setState({
            error:"Email is not valid",
            isError:true,
            submitButton:false,
            emailValidate:false
        })
        return false
        }

        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:true})
        }
        else{
          this.setState({
            isError:false,
            email:text,
            emailValidate:true,
            error:''
        }) 
        return true
        }
      }

      handleNumber =(text)=>{
        let pattern = new RegExp(/^[0-9\b]+$/);
        if(text === "")
        {
          this.setState({
            error:"Phone Number is not valid",
            isError:true,
            submitButton:true,
            numValidate:true
        })
        return false
        }
        if (!pattern.test(text)) {
          this.setState({
            error:"Only numbers are accepted!",
            isError:true,
            submitButton:false,
            numValidate:false
        })
          return false;
        }
        else if(text.length < 10){
          this.setState({
            error:"Enter valid phone number!",
            isError:true,
            submitButton:false,
            numValidate:false
        })
          return false;
        }
        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate){
          this.setState({submitButton:false})
        }
        else{
          this.setState({
            submitButton:true,
            isError:false,
            phonenumber: text,
            numValidate:true,
            error:'',
        }) 
        return true
        }
      }

      handlePassword =(text)=>{
        const{password} = this.state
        
        if(text.trim() === ""){
            this.setState({
              error:"Please Enter password !",
              isError:true,
              submitButton:false
          })
          return false;
        }
        
        else if(text.length < 6)
        {
            this.setState({
              error:"Password must be at least 6 character.",
              isError:true,
              submitButton:false
          })
          return false
        }
        
       else if(text.trim().length > 5){
         if(text.trim() === password)
        {
          this.setState({
            submitButton:true,
            tempPassword:text.trim(),
            isError:false,
            error:""  
          }) 
          return true
        }
        else if(password.trim() !== "" && text.trim() !== password)
        {
            this.setState({
              tempPassword : text.trim(),
              error:"Password does not match.2",
              isError:true,
              submitButton:false
          })
          return false
        }
        else
        {
          this.setState({
            submitButton:true,
            tempPassword:text.trim(),
            isError:false,
            error:""  
          }) 
          return true
        }
       }
       
      }

      handleConfirmPassword=(text)=>{
        if(text.trim() === ""){
            this.setState({
              error:"Please Enter password!1",
              isError:true,
              submitButton:false
          })
          return false;
        } 
        else if(this.state.tempPassword !== text.trim()) {
            this.setState({
              password:text.trim(),
              error:"Passwords does not match.1",
              isError:true,
              submitButton:false,
              passValidate:false
          })
          return false;
        }
        
        else
        {
          this.setState({
            submitButton:true,
            passValidate:true,
            password:text.trim(),
            isError:false,
            error:""  
          }) 
          return true
        }
      }

      handleSubmit=()=>{
        const{isError,error} = this.state
        if(this.state.numValidate && this.state.passValidate && this.state.emailValidate && this.state.fnameValidate && this.state.lnameValidate)
        {
          alert(` 
            ${this.state.firstname}
            ${this.state.lastname}
            ${this.state.email}
            ${this.state.phonenumber}
            ${this.state.tempPassword}
            ${this.state.password}
            ${this.state.role}`)
         }
       else if(isError){
            alert(`${error}`)
         }
        else{
            alert("Please fill the information")
         }
      }

    handleRole=(text)=>
    {
      this.setState({
      role : text
      }) 
      return true   
    }
      
    render(){   
    return (
      <View
      style={{flex:1}}
      showsVerticalScrollIndicator={false}>
        <ImageBackground
           source={require('../assets/login.png')}
           style={
               {height:Dimensions.get('window')}.height
                }
           > 
        <View style={styles.container}>
        <Text style={styles.title}>Create an</Text><Text style={styles.title}>Account</Text>
            <Text>First Name</Text>
            <TextInput
                style={[styles.input]}
                placeholder="John"
                keyboardType="ascii-capable"
                onChangeText = {(value)=>this.handleFirstName(value)}
            />
            <Text>Last Name</Text>
            <TextInput
                style={[styles.input]}
                placeholder="Doe"
                keyboardType="ascii-capable"
                onChangeText = {(value)=>this.handleLastName(value)} 
            />
            <Text>Email</Text>
            <TextInput
                placeholder="johndoe@domain.com"
                keyboardType='email-address'
                autoCapitalize="none"
                style={[styles.input,
                this.state.emailValidate? styles.success : null]}
                onChangeText = {(value)=>this.handleEmail(value)} 
            />
            <Text>Phone Number</Text>
            <TextInput
                style={[styles.input]}
                type="number"
                placeholder="412-123-4567"
                keyboardType='numeric'
                onChangeText = {(value)=>this.handleNumber(value)}
                maxLength={10} 
            />
            <Text>Password</Text>
            <TextInput
                style={[styles.input]}
                placeholder="********"
                secureTextEntry={true}
                onChangeText = {(value)=>this.handlePassword(value)} 
                />
            <Text>Confirm Password</Text>
            <TextInput
                style={[styles.input]}
                placeholder="********"
                secureTextEntry={true}
                onChangeText = {(value)=>this.handleConfirmPassword(value)} 
                    />
            <Text>Role</Text>
                  <RadioForm
                      radio_props={radio_props}
                      initial={this.state.role}
                      formHorizontal={true}
                      onPress={(value) =>this.handleRole(radio_props[value].label)}


                  />
            <Text style={styles.errMsg}>{this.state.error}</Text>
             <Button enabled={this.state.submitButton} // submitbtn value is true then the button will be disabled
              style={this.state.passValidate && this.state.emailValidate && this.state.numValidate
                && this.state.fnameValidate && this.state.lnameValidate? styles.enabled : styles.disabled}//passBtn and emailBtn helps the button to define the css to use if both are true then and then the css of enable will be applied
              onPress={()=> this.handleSubmit()}
              ><Text>Sign Up</Text></Button> 
              
        </View>
        </ImageBackground>
        </View>
        


        );
    }
} 
const styles = StyleSheet.create({
  errMsg:{
    fontWeight:'bold',
    color:'red'
  },
  input: {
    height: 40,
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
  },
  success:{
      borderColor:'#006400',
  },
    title:{
      fontSize:40,
      fontWeight:'bold',
      paddingBottom:5,
      marginBottom:10,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:30,
        paddingRight:30
    },
  enabled:{
      backgroundColor:'#21A656',
      justifyContent : "center",
      alignItems : "center",
      width : '100%',
      alignSelf : "center",
      textAlign : "center",
  },
  disabled:{
      backgroundColor:'#21A656',
      justifyContent : "center",
      alignItems : "center",
      width : '100%',
      alignSelf : "center",
      textAlign : "center",
      // opacity:0.5,
      color:'black'
  },
    role:{
        flexDirection: 'row',
        borderColor:'black',
        borderRadius:3,
    }
  })