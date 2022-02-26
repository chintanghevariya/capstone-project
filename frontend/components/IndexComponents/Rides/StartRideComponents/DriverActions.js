import { View, Text, Divider } from 'native-base'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

export default function DriverActions({ rideDetails }) {

    const url = "mark present url";

    return (
        <View>
            <Text>Driver Actions</Text>
            <Divider />
            <Text>Scan QR Code</Text>
            <QRCode value={url} />
            <Divider />
            <Text>Passenger Code</Text>
            {
                rideDetails.passengers.map((passenger, idx) => (
                    <Text>
                        { idx + 1} { " " }
                        { passenger.code }
                    </Text>
                ))
            }
        </View>
    );
}
