import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import { Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RecentTransaction } from './RecentTransaction';


export default function Wallet({ navigation }) {
    wall = <Ionicons name="wallet" size={40} />;
   

  return (
      <SafeAreaView style={Styles.container}>
          <ScrollView>
              <View>
                  <View style={Styles.con}>
                      <Text
                          style={{
                              fontSize: 18,
                              fontWeight: "bold",
                              justifyContent: "center",
                          }}
                      >
                          My Balance
                      </Text>
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          {wall}
                          {"             "}$ 120.00
                          {"                        "}
                      </Text>
                  </View>
                  <View
                      style={{
                          borderBottomColor: "#CCCCCC",
                          borderBottomWidth: 1,
                          shadowColor: "#000",
                          shadowOffset: { width: 0, height: 1 },
                          shadowOpacity: 0.8,
                          shadowRadius: 1,
                      }}
                  />
                  <TouchableOpacity
                      style={Styles.button}
                      onPress={() => navigation.navigate("AddCard")}
                      underlayColor="#fff"
                  >
                      <Text style={Styles.buttonText}> Add New Card </Text>
                  </TouchableOpacity>
                  <Button
                      onPress={() => navigation.navigate("AddToWallet")}
                      width={"xs"}
                      marginX={"10"}
                  >
                      <Text style={Styles.buttonText}>Add To Wallet</Text>
                  </Button>
                  <Text style={{ fontSize: 14, marginLeft: 40 }}>
                      Recent Transaction
                  </Text>
                  <View style={Styles.recentTrans}>
                      <RecentTransaction
                          FirstName={"John"}
                          LastName={"Doe"}
                          price={"$ 30.00"}
                          Date={"10/11/2021"}
                          Time={"10:25AM"}
                      />

                      <RecentTransaction
                          FirstName={"John"}
                          LastName={"Doe"}
                          price={"$ 30.00"}
                          Date={"10/11/2021"}
                          Time={"10:25AM"}
                      />

                      <RecentTransaction
                          FirstName={"John"}
                          LastName={"Doe"}
                          price={"$ 30.00"}
                          Date={"10/11/2021"}
                          Time={"10:25AM"}
                      />

                      <RecentTransaction
                          FirstName={"John"}
                          LastName={"Doe"}
                          price={"$ 30.00"}
                          Date={"10/11/2021"}
                          Time={"10:25AM"}
                      />
                  </View>
              </View>
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
    con:{
        alignItems: "center",
        padding:10,
        justifyContent: 'space-between',
    },
    recentTrans:{
        justifyContent:'center',
        padding:10,
    },


            })
