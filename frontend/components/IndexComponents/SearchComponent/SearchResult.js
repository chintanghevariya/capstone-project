import { View } from 'native-base'
import React from 'react'
import { RideContainer } from '../Rides/RideContainer';

export default function SearchResult({ route, navigation }) {

    const { rides } = route.params;

    const handleRideSelect = (rideId) => {
        navigation.navigate("RideDetail", {
            rideId,
        });
    }

    return (
        <View>
            {
                rides.map((ride, index) => (
                    <RideContainer 
                        key={index} 
                        ride={ride}
                        onSelect={() => handleRideSelect(ride._id)} />
                ))
            }
        </View>
    )
}
