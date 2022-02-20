import { View, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { getRequestList, getRideOfCurrentUserAsDriver } from '../../../api/rides'

const RequestList = () => {

    const [requestList, setRequestList] = useState([])
    const getRides = async () => {
        const [requestList, error] = await getRequestList('620aae3d48dffbdadffdbc0a');
        if (error) {
            console.log(error);
            return;
        }
        alert(JSON.stringify(requestList.data))
    }

    useEffect(() => {
        getRides()
            .then(allRequest => {
                setRequestList(allRequest)
            })
    }, []);

    return (
        <View>
            {/* <Button onPress={() => getRideRequestList()}>click me</Button> */}
        </View>
    )
}

export default RequestList
