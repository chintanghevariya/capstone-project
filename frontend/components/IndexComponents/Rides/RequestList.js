import { ScrollView,View, Button,Heading } from 'native-base'
import { Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getRequestList, requestAccept, requestReject } from '../../../api/rides'

const RequestList = ({rideId,limit=null}) => {

    const [requestList, setRequestList] = useState([])
    const getRides = async () => {
        const [requestList, error] = await getRequestList('620aae3d48dffbdadffdbc0a');
        if (error) {
            console.log(error);
            return;
        }
        console.log(requestList.data)
        return requestList.data
    }

    useEffect(() => {
        getRides()
            .then(allRequest => {
                if(limit === null){
                    setRequestList(allRequest)
                }
                else{
                    setRequestList(allRequest.slice(0, limit))
                }
            })
        
    }, []);

    return (
        <View >
        <Heading size="xl">
            Requests
        </Heading>
            <ScrollView >
            {/* <Button onPress={() => alert(JSON.stringify(requestList))}>click me</Button> */}
            {requestList.map((request,index)=>(
                <View key={index} style={[Styles.container,Styles.requestContainer]}>
                    <Text style={{marginLeft: 10}}>{request.userId.firstName} {request.userId.lastName}</Text>
                    <View style={Styles.buttonContainer}>
                        <Button onPress={() => requestReject('620aae3d48dffbdadffdbc0a', request.userId._id).then((value) => alert(value))}>Decline</Button>
                        <Text> </Text>
                        <Button onPress={() => requestAccept('620aae3d48dffbdadffdbc0a', request.userId._id).then((value) => alert(JSON.stringify(value)))}>Accept</Button>
                    </View>
                </View>
            ))}
        </ScrollView>
        </View>
    )
}

export default RequestList

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    requestContainer: {
        margin: 10,
        borderWidth: 0.2,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        borderRadius: 4,
        shadowColor: '#171717',
        width:'95%',
        shadowOpacity: 0.5,
        shadowRadius: 9,
        height:50,
        
    },
    buttonContainer:{
        flexDirection: 'row',
        marginRight:10,
    }
})