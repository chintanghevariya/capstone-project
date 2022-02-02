import * as Loc from 'expo-location';

export async function Location() {
    try{
    let location = await Loc.getCurrentPositionAsync({ enableHighAccuracy: true });
    let lat = location.coords.latitude
    let long = location.coords.longitude
    return { lat, long }
    }
    catch(err){
        return null
    }
    
}

