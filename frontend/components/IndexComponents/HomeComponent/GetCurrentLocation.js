import * as Loc from 'expo-location';

export async function GetCurrentLocation() {
    try{
        let { status } = await Loc.requestForegroundPermissionsAsync();
        let location = await Loc.getCurrentPositionAsync({
            enableHighAccuracy: false,
            timeout: 20000,
            maximumAge: 1000,
        });
        let lat = location.coords.latitude
        let long = location.coords.longitude
        return { lat, long }
    }
    catch(err){
        console.error(err);
        return null;
    }
    
}

