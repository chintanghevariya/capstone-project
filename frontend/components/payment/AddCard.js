import React, { useState, useEffect } from 'react';
import {Text,StyleSheet,SafeAreaView} from 'react-native'
import { ScrollView, View, Button, Input } from "native-base";
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { getSetupIntentId } from '../../api/stripe';

export default function AddCard() {

    const { confirmSetupIntent, loading } = useStripe();

    const [fullName,setFullName] = useState("");
    const [fullNameValidate,setFullNameValidate] = useState(false);

    const handleFullName = (text)=>{
        if(text.trim() === ""){
            setError("Please Enter Full Name!"),
            setFullNameValidate(false)
        return false
        }
        else{
            setFullName(text)
            setFullNameValidate(true)
            setError('')
        return true
        }
    }

    const handleSubmit = async ({ navigation }) => {
        const billingDetails = {
            email: "aarytrivedi@gmail.com",
        };
        const [result, setupIntentError] = await getSetupIntentId();
        const { secret } = result.data;
        const { setupIntent, error } = await confirmSetupIntent(secret, {
            type: "Card",
            billingDetails,
        });
        if (error) {
            console.error(error);
            return;
        }
        navigation.navigate("Dashboard", { screen: "Profile" });
    };

  return (
      <SafeAreaView style={Styles.container}>
          <ScrollView padding={3}>
              <View>
                  <Text style={{ fontSize: 25 }}>Add Card</Text>
              </View>
              <View>
                  <Text style={Styles.textLable}>Full Name</Text>
                  <Input
                      backgroundColor={"white"}
                      placeholder={"John Doe"}
                      autoCapitalize="none"
                      onChangeText={(text) => handleFullName(text)}
                  />
              </View>
              <View>
                  <CardField
                      postalCodeEnabled={true}
                      placeholder={{
                          number: "4242 4242 4242 4242",
                      }}
                      cardStyle={{
                          backgroundColor: "#FFFFFF",
                          textColor: "#000000",
                      }}
                      style={{
                          width: "100%",
                          height: 50,
                          marginVertical: 30,
                      }}
                  />
              </View>
              <Button style={Styles.enabled} onPress={handleSubmit}>
                  Add New Card
              </Button>
          </ScrollView>
      </SafeAreaView>
  );
    }


const Styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        marginBottom: 20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#21A656',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    textLable:{
        marginTop : "5%",
    
      },
    
    con:{
        alignItems: "center",
        padding:10,
        justifyContent: 'space-between',
    },
    recentTrans:{
        justifyContent:'center',
        padding:10,
    },

    enabled:{
        marginTop:20,
        backgroundColor:'#21A656',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        alignSelf : "center",
        textAlign : "center",
      },
      disabled:{
        backgroundColor:'#90d3ab',
        justifyContent : "center",
        alignItems : "center",
        width : '100%',
        alignSelf : "center",
        textAlign : "center",
        opacity:0.5,
        color:'black'
      },
     

            })
