import React, { useState} from 'react'
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Input } from 'native-base';
import { LocationAutoComplete } from '../../Input/LocationAutoComplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from 'styled-system';

export default function FilterRide() {

    const [from, setFrom] = useState(false); 
    const [date, setDate] = useState(new Date());
    const [pet, setPet] = useState(false);
    const [smokeFree, setSmokeFree] = useState(false);
    const [female, setFemale] = useState(false);
    const [luggage, setLuggage] = useState(false);
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const arrow = <Icon name="long-arrow-down" size={60} />

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        // setShowDateTimePicker(false)
    };

    const checkPet = () => {
        setPet(!pet)
    }

    const checkSmoke = () => {
        setSmokeFree(!smokeFree)
    }

    const checkFemale = () => {
        setFemale(!female)
    }

    const checkLuggage = () => {
        setLuggage(!luggage)
    }
  return (
      <ScrollView style={Styles.container}>
          <View style={Styles.header}>
              <View style={[Styles.filterRide,Styles.marginleft]}>
                  <Text style={{fontSize:32}}>Filter Rides</Text>
              </View>
              <View style={[Styles.wallet, Styles.marginright]}>
                  <Button>Apply Filter</Button>
              </View>
          </View>
          <View style={[Styles.fromLocation,Styles.marginright, Styles.marginleft]}>
              <Text style={[Styles.textLable]}>From</Text><Text></Text>
              <LocationAutoComplete value={from} onChange={setFrom} />
          </View>
          <View style={Styles.arrow}>{arrow}</View>
          <View style={[Styles.marginright, Styles.marginleft]}>
              <Text style={[Styles.textLable]}>To</Text><Text></Text>
              <LocationAutoComplete style={[Styles.marginright, Styles.marginleft]}value={from} onChange={setFrom} />
          </View>
          <View style={[{ borderBottomColor: 'black', borderBottomWidth: 0.5,paddingVertical:10 }, Styles.marginleft, Styles.marginright]}></View>
          <TouchableOpacity style={[Styles.marginleft, { paddingVertical: 10}]}
              onPress={() => {
                  setShowDateTimePicker(!showDateTimePicker);
              }}>
              <Text style={Styles.textLable}>Select Date and Time</Text>
          </TouchableOpacity>
          <View style={[Styles.dateTime, Styles.marginleft, { paddingBottom: 10,paddingVertical: 10 }]}>
              {showDateTimePicker && (
                  <DateTimePicker
                      value={date}
                      mode={"datetime"}
                      is24Hour={true}
                      onChange={(e, value) => onChange(e, value)}
                  />
              )}
          </View>
          <View style={Styles.marginleft}>
              <Text style={Styles.textLable}>Amount</Text>
              <View style={[Styles.marginleft, Styles.amount]}>
                    <View>
                      <Text style={Styles.minimum}>minimum</Text>
                      <Input keyboardType='numeric' style={Styles.inputField}placeholder="minimum" />
                    </View>
                    <View style={Styles.marginright}>
                      <Text style={Styles.minimum}>maximum</Text>
                      <Input keyboardType='numeric' style={Styles.inputField}placeholder="maximum"/>
                    </View>
              </View>
            </View>
          <View style={[{ borderBottomColor: 'black', borderBottomWidth: 0.5, paddingVertical: 10 }, Styles.marginleft, Styles.marginright]}></View>
            <View style={[Styles.marginleft,Styles.marginright]}>
              <Text style={[Styles.textLable, { paddingVertical: 10}]}>Seats Available</Text>
              <Input
                  style={Styles.inputField}
                  placeholder={" 4 "}
                  autoCapitalize="none"
                  onChangeText={(text) => handleSeat(text)}
              />
            </View>
          <View style={[{ borderBottomColor: 'black', borderBottomWidth: 0.5, paddingVertical: 10 }, Styles.marginleft, Styles.marginright]}></View>

          <View style={[Styles.img, { paddingVertical: 10}]}>
              <TouchableOpacity
                  onPress={() => checkPet()}
                  style={pet ? Styles.iconSelected : Styles.icons}
              >
                  <Image
                      source={require("../../../assets/pet.png")}
                      style={Styles.icons}
                  ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => checkSmoke()}
                  style={smokeFree ? Styles.iconSelected : Styles.icons}
              >
                  <Image
                      source={require("../../../assets/smokeFree.png")}
                      style={Styles.icons}
                  ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => checkFemale()}
                  style={female ? Styles.iconSelected : Styles.icons}
              >
                  <Image
                      source={require("../../../assets/female.png")}
                      style={Styles.icons}
                  ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => checkLuggage()}
                  style={luggage ? Styles.iconSelected : Styles.icons}
              >
                  <Image
                      source={require("../../../assets/luggage.png")}
                      style={Styles.icons}
                  ></Image>
              </TouchableOpacity>
          </View>
      </ScrollView>
  )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: "3%",
        marginBottom: "3%",
    },
    marginleft:{
        marginLeft: "7%",
    },
    marginright: {
        marginRight: "7%",
    },
    textLable:{
        fontSize:22
    },
    minimum:{
        fontSize: 16
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    filterRide: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize:32
    },
    wallet: {
        alignSelf: 'center',
        marginRight: "8%",
    },
    fromLocation:{
        paddingVertical:26
    },
    arrow:{
        alignSelf:'center',
        opacity:0.5
    },
    amount:{
        flexDirection:'row',
        justifyContent:"space-around",
        marginLeft: "7%",
    },
    inputField:{
        borderColor: 'black',
        borderBottomWidth: 1,
        marginTop: "5%"
    },
    img: {
        marginLeft: "5%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginRight: "8%",
    },
    icons: {
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    iconSelected: {
        borderWidth: 2,
        width: 30
    },
})
