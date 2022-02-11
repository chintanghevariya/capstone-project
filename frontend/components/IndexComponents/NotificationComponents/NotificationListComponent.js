import { ScrollView } from 'native-base';
import React from 'react'
import NotificationItem from './NotificationItemComponent';

export default function NotificationList({ notifications }) {

    const acceptRequest = () => {
        alert("Accepted");
    }

    const rejectRequest = () => {
        alert("Rejected");
    }

    return (
        <ScrollView paddingX={3}>
            { notifications.map((notification, idx) => (
                <NotificationItem
                    key={idx}
                    notification={notification}
                    onAccept={acceptRequest}
                    onReject={rejectRequest} />
            ))}
        </ScrollView>
    );
}
