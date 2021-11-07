import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import theme from '../config/theme';
import MyAppButton from './../components/common/MyAppButton';

function RecoveryPhrase(props) {
    return (
        <Screen statusBarColor="#E5E5E5" style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#E5E5E5" }}>

            {/* Nav */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }}>

                {/* Back Icon */}
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.2), position: 'absolute', left: RFPercentage(2) }} color={theme.darkBlue} />

                {/* Heading */}
                <Text style={{ color: "#333333", fontSize: RFPercentage(2.5), fontFamily: 'Rubik_500Medium' }}>
                    Recovery Phrase
                </Text>
            </View>

            {/* Center view */}
            <View style={{ marginTop: RFPercentage(20), width: "80%", justifyContent: 'center', alignItems: 'center', backgroundColor: theme.white, height: RFPercentage(26), borderRadius: RFPercentage(3) }}>
                <View style={{ width: "99%", justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme.lightGrey, height: RFPercentage(25.6), borderRadius: RFPercentage(3) }}>
                    <View style={{ width: '90%', marginTop: RFPercentage(7) }}>
                        <Text style={{ color: theme.black, fontSize: RFPercentage(2) }}>
                            0x2C8A946E800719602DA0201BCEFD2423a81B6771
                        </Text>
                    </View>
                </View>
            </View>

            {/* Button */}
            <View style={{ width: '100%', position: 'absolute', bottom: RFPercentage(6) }}>
                <MyAppButton
                    title="Okay"
                    bold={true}
                    borderradius={RFPercentage(20)}
                    backgroundColor={theme.darkBlue}
                    color={theme.white}
                    width={"70%"}
                />
            </View>
        </Screen>
    );
}

export default RecoveryPhrase;