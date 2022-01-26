import React from 'react';
import { Button } from 'native-base'
import { View, StyleSheet } from 'react-native';
import { createCustomer } from '../../api/stripe';

export default function StripeConsent() {

    const onSubmit = () => {
        createCustomer()
            .then(response => {
                const [result, error] = response;
                if (error) {
                    alert(error);
                    return;
                }
                alert(result.data.message);
            });
    }

    return (
        <View style={styles.container}>
            <Button
                width={"sm"}
                backgroundColor={"#21A656"}
                onPress={onSubmit}>
                Continue
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
})
