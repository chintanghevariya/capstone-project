import React, { useState,useEffect} from 'react'
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Input } from 'native-base';
import { LocationAutoComplete } from '../../Input/LocationAutoComplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input';
import { getLocationDetails } from '../../../api/map';

export default function FilterRide() {

    const [from, setFrom] = useState(false); 
    const [to, setTo] = useState(false); 
    const [date, setDate] = useState(new Date());
    const [pet, setPet] = useState(false);
    const [smokeFree, setSmokeFree] = useState(false);
    const [female, setFemale] = useState(false);
    const [luggage, setLuggage] = useState(false);
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const arrow = <Icon name="long-arrow-down" size={60} />
    const [minAmount,setMinAmount] = useState(0)
    const [maxAmount, setMaxAmount] = useState(0)
    const [seat,setSeat] = useState(0)
    const [preferences, setPreferences] = useState([''])
    


    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        // setShowDateTimePicker(false)
    };

    const onChangeMinAmount = (text)=>{
        setMinAmount(text)
    }
    const onChangeMaxAmount = (text) => {
        setMaxAmount(text)
    }
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
    const handlePreferences = () => {
        const preferences = [];
        if (pet) { preferences.push("pet") }
        if (smokeFree) { preferences.push("somefree") }
        if (female) { preferences.push("female") }
        if (luggage) { preferences.push("luggage") }
        return preferences;
    }
    const handleSubmit = async() => {


    const preferences = handlePreferences()
    const [fromLocationDetailsResponse, fromLocationDetailsError] =
        await getLocationDetails(from.place_id);
    const [toLocationDetailsResponse, toLocationDetailsError] =
        await getLocationDetails(to.place_id);

    const { result: fromLocationDetails } = fromLocationDetailsResponse.data;
    const { result: toLocationDetails } =
        toLocationDetailsResponse.data;

    const fromDetails = {
        locationName: from.structured_formatting.main_text,
        latitude: fromLocationDetails.geometry.location.lat,
        longitude: fromLocationDetails.geometry.location.lng,
    };

    const toDetails = {
        locationName: to.structured_formatting.main_text,
        latitude: toLocationDetails.geometry.location.lat,
        longitude: toLocationDetails.geometry.location.lng,
    };

    const details = {
        from: fromDetails,
        to: toDetails,
        preferences,
        startDateAndTime: date,
        numberOfSeats: Number(seat),
        minPrice: Number(minAmount),
        maxPrice: Number(maxAmount)
    };

    alert(JSON.stringify(details))

}
  return (
      <ScrollView style={Styles.container}>
          <View style={Styles.header}>
              <View style={[Styles.filterRide,Styles.marginleft]}>
                  <Text style={{fontSize:32}}>Filter Rides</Text>
              </View>
              <View style={[Styles.wallet, Styles.marginright]}>
                  <Button onPress={()=>handleSubmit()}>Apply Filter</Button>
              </View>
          </View>
          <View style={[Styles.fromLocation,Styles.marginright, Styles.marginleft,{paddingBottom:24}]}>
              <Text style={[Styles.textLable]}>From</Text><Text></Text>
              <LocationAutoComplete value={from} onChange={setFrom} />
          {/* </View>
                    {arrow}
          <View style={[Styles.marginright, Styles.marginleft]}> */}
              <Text style={Styles.arrow}>{arrow}</Text>
              <Text style={[Styles.textLable]}>To</Text><Text></Text>
              <LocationAutoComplete value={to} onChange={setTo} />
          
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
                      onChange={(e, value) => onChangeDate(e, value)}
                  />
              )}
          </View>
          {/* <View style={Styles.marginleft}> */}
              <Text style={Styles.textLable}>Amount</Text>
              <View style={[Styles.marginleft, Styles.amount]}>
                    <View>
                      <Text style={Styles.minimum}>minimum</Text>
                      <NumericInput 
                          value={minAmount}
                          onChange={value => setMinAmount(value)}
                        //   onLimitReached={(isMax, msg) => alert(msg)}
                          minValue={0}
                          valueType='real'
                          rounded
                        />

                    </View>
                    <View style={Styles.marginright}>
                      <Text style={Styles.minimum}>maximum</Text>
                      <NumericInput 
                          value={maxAmount}
                          onChange={value => onChangeMaxAmount(value)}
                        //   onLimitReached={(isMax, msg) => alert(msg)} 
                          minValue={minAmount+1}
                          valueType='real'
                          rounded
                          />
                    </View>
              </View>
            </View>
          <View style={[{ borderBottomColor: 'black', borderBottomWidth: 0.5, paddingVertical: 10 }, Styles.marginleft, Styles.marginright]}></View>
            <View style={[Styles.marginleft,Styles.marginright]}>
              <Text style={[Styles.textLable, { paddingVertical: 10}]}>Seats Available</Text>
              <NumericInput
                  value={seat}
                  onChange={value => setSeat(value)}
                  //   onLimitReached={(isMax, msg) => alert(msg)} 
                  totalWidth={240}
                  totalHeight={50}
                  minValue={1}
                  maxValue={10}
                  valueType='real'
                  rounded
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
