import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import OtpInputs from '../components/OtpInputs';

function OtpScreens(props) {

    const [fullText, setFullText] = useState(false);
    const [otp, setOtp] = useState();

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Back Icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4), top: RFPercentage(7) }}>
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }}>

                {fullText ? <Text style={{ color: "#ff0000", fontSize: RFPercentage(2.5) }}>
                    Pin is incorrect
                </Text> : null}

                <Text style={{ marginTop: RFPercentage(7), fontSize: RFPercentage(3.5), color: Colors.primary, fontWeight: 'bold' }}>
                    Enter Pin
                </Text>
            </View>

            <OtpInputs getOtp={(otp) => setOtp(otp)} />
            {/* Otp Input
            <OTPInputView
                style={{ width: '80%', height: RFPercentage(20) }}
                pinCount={6}
                onCodeFilled={() => setFullText(true)}
                secureTextEntry={true}
                placeholderTextColor={"black"}
                autoFocusOnLoad
                codeInputFieldStyle={{
                    width: 30,
                    height: 45,
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    fontSize: RFPercentage(3.5),
                    color: fullText ? "#ff0000" : Colors.primary
                }}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
            /> */}
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

    underlineStyleHighLighted: {
        borderColor: Colors.primary,
    },

});

export default OtpScreens;