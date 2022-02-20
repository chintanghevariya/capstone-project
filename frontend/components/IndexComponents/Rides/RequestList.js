import { View, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { getRequestList, getRideOfCurrentUserAsDriver } from '../../../api/rides'

const RequestList = ({rideId,limit=null}) => {

    const [requestList, setRequestList] = useState([])
    const getRides = async () => {
        const [requestList, error] = await getRequestList('620aae3d48dffbdadffdbc0a');
        if (error) {
            console.log(error);
            return;
        }
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
        <View>
            {/* <Button onPress={() => alert(JSON.stringify(requestList))}>click me</Button> */}
            {requestList.map((request,index)=>{
                <View>
                    
                </View>
            })}
        </View>
    )
}

export default RequestList
