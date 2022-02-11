import { View, Heading } from "native-base";
import React from 'react';
import { StyleSheet,Text } from 'react-native';
import NotificationList from './NotificationList';

const dummyData = [
    {
        id: 1,
        type: "join-request",
        user: {
            id: 1,
            name: "Joe",
        },
        createdAt: new Date(),
    },
    {
        id: 2,
        type: "cancel-ride",
        user: {
            id: 1,
            name: "Joe",
        },
        createdAt: new Date(),
    },
    {
        id: 3,
        type: "cancel-request",
        user: {
            id: 1,
            name: "Joe",
        },
        createdAt: new Date(),
    },
];

export default function Notification() {
    return (
        <View backgroundColor="white" style={styles.container}>
            <View style={styles.headingContainer}>
                <Heading size="xl">
                    Notifications
                </Heading>
            </View>
            <View>
                <NotificationList
                    notifications={dummyData} />
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
