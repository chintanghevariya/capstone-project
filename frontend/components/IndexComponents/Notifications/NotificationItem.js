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
                <View width={"90%"} style={styles.headerText}>
                    <Text>
                        {notification.user.name} Wants to join your ride
                    </Text>
                </View>
                <View style={styles.headerTime}>
                    <Text>{notification.createdAt.getHours()}</Text>
                </View>
            </View>
            <View marginTop={3} style={styles.footer}>
                <Button
                    marginX={"1"}
                    size="sm"
                    variant={"link"}
                    colorScheme="danger"
                    onPress={rejectRequest}
                >
                    Cancel
                </Button>
                <Button
                    marginX={"1"}
                    size="md"
                    variant={"solid"}
                    colorScheme="tertiary"
                    onPress={onAccept}
                >
                    Accept
                </Button>
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