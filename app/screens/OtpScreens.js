import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import OTPInputView from '@twotalltotems/react-native-otp-input'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function OtpScreens(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            {/* Back Icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4), top: RFPercentage(7) }}>
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
            </TouchableOpacity>

            {/* Heading */}
            <Text style={{ marginTop: RFPercentage(22), fontSize: RFPercentage(3.5), color: Colors.primary, fontWeight: 'bold' }}>
                Enter Pin
            </Text>

            {/* Otp Input */}
            <OTPInputView
                style={{ width: '80%', height: RFPercentage(20) }}
                pinCount={6}
                secureTextEntry={true}
                placeholderTextColor={"black"}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: RFPercentage(3.5),
        color: Colors.primary
    },

    underlineStyleHighLighted: {
        borderColor: Colors.primary,
    },

});

export default OtpScreens;