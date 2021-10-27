import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

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

            <Text style={{ marginTop: RFPercentage(22), fontSize: RFPercentage(2.8), color: Colors.primary, fontWeight: 'bold' }}>
                Enter Pin
            </Text>
        </Screen>
    );
}

export default OtpScreens;