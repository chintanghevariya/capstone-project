import React, { useState, useEffect } from 'react';
import {View,Text, StyleSheet} from 'react-native'
import { Button } from 'native-base';
import {Location} from './Location';
import { getUser } from "../../../helpers/user"
import { getRides } from '../../../api/rides';

export default function Example() {
    const[location,setLocation] =useState({})
    const[user,setUser] = useState({})
    const onSubmit = () => {
        getRides()
            .then(response => {
                const [result, error] = response;
                if (error) {
                    alert(error);
                    return;
                }
                alert(JSON.stringify(result.data.data[0]));
            });
    }
    // setUser(getUser())
    // to access the lattitude and longitude the use location.lat and location.long 
    useEffect(() => {     
        Location().then((value) => setLocation(value))   
        getUser().then((value)=>setUser(value))
    }, [location]) 
  return(
      <View style={Styles.container}>
          <Text>{user.firstName}</Text> 
          <Text>{location.long}</Text>
          <Button
              width={"sm"}
              backgroundColor={"#21A656"}
              onPress={onSubmit}>
              Continue
          </Button>
      </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
