import {
  StyleSheet,
} from "react-native";
import { View, Text, Button, ScrollView } from 'native-base';

import React, { useState, useEffect } from "react";

import Ionicons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { getRideById } from "../../api/rides";
import { getUser, setUser } from "../../helpers/user";
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function RideDetails({ route, navigation }) {

  const { rideId } = route.params;
  const [rideDetails, setRideDetails] = useState({})
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getRideById(rideId)
      .then(response => {
        const [result, error] = response;
        if (error) {
          console.error(error);
          return;
        }
        setRideDetails(result.data.ride);
      })
      .finally(() => setLoading(false));
    getUser()
      .then(user => {
        setUser(user)
      })
  }, [])

  const clock = <Icon name="clock-o" color={"orange"} size={16} />;
  const seat = <Ionicons name="event-seat" size={21} />;
  const dollar = <Icon name="dollar" size={20} />;
  const petIcon = <Ionicons name="pets" size={25} />;
  const smokeIcon = <Ionicons name="smoke-free" size={25} />;
  const editIcon = <Ionicons name="edit" size={25} color={"blue"} />;
  const direction = (
    <Ionicons
      name="arrow-right-alt"
      size={50}
      color={"white"}
      width={100}
      paddingTop={1}
    />
  );
  const genderIcon = <MaterialCommunityIcons name="gender-female" size={25} />;
  const deleteIcon = (
    <MaterialCommunityIcons name="delete" size={25} color={"red"} />
  );
  const Play = (
    <MaterialCommunityIcons name="play-circle" size={25} color={"white"} />
  );
  const luggageIcon = <Ionicons name="luggage" size={25} />;
  const arrowSwap = <Fontisto name="arrow-swap" size={20} />;

  const [pet, setPet] = useState(false);
  const [smokeFree, setSmokeFree] = useState(false);
  const [female, setFemale] = useState(false);
  const [luggage, setLuggage] = useState(false);
  const [time, setTime] = useState(" 10:00 AM");
  const [date, setDate] = useState(" 8th September 2021,");
  const [price, SetPrice] = useState("20");
  const [occurence, Setoccurence] = useState("Mon, Tue, Wed, Sat");
  const [numberSeat, SetnumberSeat] = useState("2");
  const [depature, Setdepature] = useState("To");
  const [arrival, Setarrival] = useState("V");

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  if (loading) {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

  return (
      <>
          <ScrollView>
              <View textAlign={"center"} backgroundColor="#21A656">
                  <Text mx={3}>{rideDetails.from.locationName}</Text>
                  {direction}
                  <Text mx={3}>{rideDetails.to.locationName}</Text>
              </View>
              <View
                  marginTop={-2}
                  flex={1}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  zIndex={999}
              >
                  <MapView
                      style={{
                          width: 300,
                          height: 200,
                          zIndex: 999,
                      }}
                      initialRegion={{
                          latitude: rideDetails.from.latitude,
                          longitude: rideDetails.from.longitude,
                          latitudeDelta: 1.5,
                          longitudeDelta: 1.5,
                      }}
                  >
                      <Marker
                          coordinate={{
                              latitude: rideDetails.from.latitude,
                              longitude: rideDetails.from.longitude,
                          }}
                      ></Marker>
                      <Marker
                          coordinate={{
                              latitude: rideDetails.to.latitude,
                              longitude: rideDetails.to.longitude,
                          }}
                      ></Marker>
                      {rideDetails.stops.map((stop, idx) => (
                          <Marker
                              key={idx}
                              coordinate={{
                                  latitude: stop.latitude,
                                  longitude: stop.longitude,
                              }}
                          ></Marker>
                      ))}
                  </MapView>
              </View>
              {rideDetails.driver === currentUser._id ? (
                  <View
                      flex={1}
                      flexDirection={"row"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                      my={3}
                  >
                      <Button
                          onPress={() => console.log("Delete Button Pressed")}
                          variant={"outline"}
                          flex={1}
                          flexDirection={"row"}
                          size={"sm"}
                          maxWidth={"120"}
                          leftIcon={deleteIcon}
                      >
                          <Text>Delete</Text>
                      </Button>
                      <Button
                          onPress={() => console.log("Edit Button Pressed")}
                          flex={1}
                          flexDirection={"row"}
                          size={"sm"}
                          maxWidth={"120"}
                          leftIcon={editIcon}
                          variant={"outline"}
                      >
                          <Text>Edit</Text>
                      </Button>
                  </View>
              ) : null}
              <View
                  marginTop={3}
                  marginX={5}
                  backgroundColor="white"
                  padding={4}
                  alignItems={"center"}
                  borderRadius={3}
                  borderWidth={1}
                  borderColor={"#ccc"}
              >
                  <Text fontSize={"md"}>
                      {clock}
                      {date}
                      {time}
                  </Text>
              </View>
              <View
                  marginY={3}
                  flex={1}
                  flexDirection={"row"}
                  marginX={5}
                  justifyContent={"space-between"}
              >
                  <View
                      backgroundColor={"white"}
                      paddingY={2}
                      paddingX={4}
                      flex={1}
                      flexDirection={"row"}
                      maxWidth={60}
                      justifyContent={"center"}
                      alignItems={"center"}
                  >
                      {dollar}
                      <Text> {rideDetails.pricePerSeat}</Text>
                  </View>
                  <View
                      backgroundColor={"white"}
                      paddingY={2}
                      paddingX={4}
                      flex={1}
                      flexDirection={"row"}
                      marginX={3}
                      justifyContent={"center"}
                      alignItems={"center"}
                  >
                      {arrowSwap}
                      <Text> {occurence}</Text>
                  </View>
                  <View
                      backgroundColor={"white"}
                      paddingY={2}
                      paddingX={4}
                      flex={1}
                      flexDirection={"row"}
                      maxWidth={60}
                      justifyContent={"center"}
                      alignItems={"center"}
                  >
                      {seat}
                      <Text> {rideDetails.numberOfSeats}</Text>
                  </View>
              </View>
              <View
                  flex={1}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  marginX={3}
              >
                  <View
                      borderRadius={2}
                      padding={3}
                      backgroundColor={"white"}
                      marginX={3}
                  >
                      {petIcon}
                  </View>
                  <View
                      borderRadius={2}
                      padding={3}
                      backgroundColor={"white"}
                      marginX={3}
                  >
                      {smokeIcon}
                  </View>
                  <View
                      borderRadius={2}
                      padding={3}
                      backgroundColor={"white"}
                      marginX={3}
                  >
                      {genderIcon}
                  </View>
                  <View
                      borderRadius={2}
                      padding={3}
                      backgroundColor={"white"}
                      marginX={3}
                  >
                      {luggageIcon}
                  </View>
              </View>
          </ScrollView>
          <View position={"absolute"} bottom={10} left={10} right={10}>
              <Button
                  flex={1}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  backgroundColor={"#2421A6"}
                  onPress={() => console.log("start pressed")}
              >
                  {currentUser._id === rideDetails.driver ? (
                      <>
                          <MaterialCommunityIcons
                              name="play-circle"
                              size={25}
                              color={"white"}
                          />
                          <Text color={"white"}>Start</Text>
                      </>
                  ) : (
                      <>
                          <Ionicons
                              name="person-add"
                              size={25}
                              color={"white"}
                          />
                          <Text color={"white"}>Send join request</Text>
                      </>
                  )}
              </Button>
          </View>
      </>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
  },
  map: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    backgroundColor: "#FFFFFF",
    height: 200,
    borderRadius: 2,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    width: "95%",
  },
  iconSelected: {
    borderWidth: 3.2,
    width: "100%",
    height:'100%'
  },
  icons: {
    width: "100%",
  },
  MiddleBAR: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10%",
    marginBottom:'7%',
  },
  TopBAR: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10%",
  },
  LastSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "15%",
  },
  buttonSection: {
    paddingTop: "15%",
  },
  backgroundContainer: {
    margin: 10,
    marginBottom: 25,
    borderWidth: 0.4,
    backgroundColor: "#FFFFFF",
    height: 50,
    shadowColor: "#000000",
    borderRadius: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "95%",
  },
  backgroundContainer2: {
    margin: 10,
    marginTop: 60,
    borderWidth: 0.4,
    backgroundColor: "#FFFFFF",
    height: 60,
    shadowColor: "#000000",
    borderRadius: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "18.5%",
  },

  backgroundContainer5: {
    margin: 10,
    marginTop: 60,
    borderWidth: 0.4,
    backgroundColor: "#FFFFFF",
    height: 10,
    shadowColor: "#000000",
    borderRadius: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "18.5%",
  },
  backgroundContainer4: {
    margin: 10,
    marginTop: 60,
    borderWidth: 0.4,
    backgroundColor: "#FFFFFF",
    height: 60,
    shadowColor: "#000000",
    borderRadius: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "48.5%",
  },
  backgroundContainer3: {
    margin: 10,
    backgroundColor: "#FFFFFF",
    height: 40,
    shadowColor: "#000000",
    borderRadius: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "20%",
  },
  TopSection: {
    flexDirection: "row",
    padding: 50,
    alignItems: "center",
    backgroundColor: "#21A656",
    height: "20%",
  },
  body: {
    display: "flex",
  },
  DeleteButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
  },
  StartButton: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    color: "white",
    backgroundColor: "blue",
    width: "90%",
    fontSize: 20,
  },
  EditButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
  },
  Button: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-evenly",
    paddingTop: "5%",
  },
});
