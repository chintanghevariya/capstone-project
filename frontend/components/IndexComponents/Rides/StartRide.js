import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import { useState, useEffect, useContext } from "react";

import Ionicons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Input } from "native-base";
import { borderColor } from "styled-system";

export default function StartRide() {
  const direction = (
    <Ionicons
      name="arrow-right-alt"
      size={50}
      color={"white"}
      width={100}
      paddingTop={1}
    />
  );
  const [CustomerCode, setCustomerCode] = useState("");
  const [Mark, setMark] = useState(false);

  const Play = (
    <MaterialCommunityIcons name="play-circle" size={25} color={"white"} />
  );

  const RideDetail = [
    {
      id: "1",
      userName: "John doe",
      userImg: require("../../../assets/icons8-male-user-90.png"),
    },
    {
      id: "2",
      userName: "Mike",
      userImg: require("../../../assets/icons8-male-user-90.png"),
    },
    {
      id: "3",
      userName: "Sam",
      userImg: require("../../../assets/icons8-male-user-90.png"),
    },
  ];

  const [depature, Setdepature] = useState("Toronto");
  const [arrival, Setarrival] = useState("Vancouver");
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.TopSection}>
        <Text style={{ paddingLeft: "10%", color: "white",fontSize: "25" }}>{depature}</Text>
        <Text style={{ padding: 5, color: "white" }}>{direction}</Text>
        <Text style={{ padding: 5, color: "white" ,fontSize: "25"}}>{arrival}</Text>
      </View>
      <View style={Styles.body}>
        <View style={Styles.header}>
          <Text style={Styles.header}>Mark Riders </Text>
        </View>
        <View style={Styles.list}>
          <FlatList
            data={RideDetail}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={Styles.card}>
                <View style={Styles.userinfo}>
                  <View style={Styles.userimgwrapper}>
                    <Image style={Styles.userimg} source={item.userImg}></Image>
                    <Text style={Styles.username}>{item.userName}</Text>
                  </View>
                  <View style={Styles.textsection}>
                    <Text style={Styles.label}>Customer Code</Text>
                    <View style={Styles.userinfotext}>
                      <Input
                        backgrou
                        nd={"white"}
                        placeholder="ABC123"
                        borderWidth={1}
                        borderColor='black'
                        value={CustomerCode}
                        onChangeText={setCustomerCode}
                        width="100%"
                      />
                      <View
                      paddingLeft={10}
                      ></View>
                      <TouchableOpacity
                        style = {Styles.btn}
                      >
                        <Text>MARK</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={Styles.buttonSection}>
          <TouchableOpacity
            onPress={() => console.log("start pressed")}
            style={Styles.StartButton}
          >
            <Text style={{ paddingLeft: "40%", fontSize: 1 }}>{Play}</Text>
            <Text style={{ color: "white", paddingTop: 5, paddingLeft: 10 }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn:{
  padding:10,
  borderWidth:2,
  borderColor:'blue'
  },
  mainContainer: {
    height: "100%",
    display: "flex",
  },
  TopSection: {
    flexDirection: "row",
    padding: 50,
    alignItems: "center",
    backgroundColor: "#21A656",
    height: "20%",
  },
  body: {
    margin: 25,
  },
  header: {
    fontFamily: "Arial",
    fontSize: 25,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    paddingTop:  1,
  },
  userinfo: {
    backgroundColor: "white",
  },
  textsection: {
    width: "75%", 
  },
  userimg: {
    width: 50,
    height: 50,
  },
  userinfotext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    paddingTop: 15,
    paddingLeft: 5,
  },
  label: {
    fontSize: 14,
    color: "#333333",
  },
  userimgwrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
  },
  StartButton: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "darkblue",
    padding: 10,
    color: "white",
    backgroundColor: "darkblue",
    width: "90%",
    fontSize: 20,
  },
  buttonSection: {
    paddingTop: "15%",
  },
});
