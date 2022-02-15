import { Button, View, Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function NotificationItem({
    notification,
    onAccept,
    onReject
}) {

    const rejectRequest = () => {
        onReject(notification);
    }

    const acceptRequest = () => {
        onAccept(notification);
    }

    return (
        <View backgroundColor="#F5F5F5" marginTop={3} padding={3}>
            <View style={styles.header}>
                <View width={"80%"} style={styles.headerText}>
                    <Text>
                        {notification.forUser.firstName + " " +
                            notification.forUser.lastName }{" "}
                        Wants to join your ride
                    </Text>
                </View>
                <View style={styles.headerTime}>
                    <Text>{
                        new Date(notification.createdDate).getHours()
                    }</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row"
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})