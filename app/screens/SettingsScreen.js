import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Switch, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import theme from '../config/theme';

function SettingsScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <Screen statusBarColor="#E5E5E5" style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#E5E5E5" }}>

            {/* Nav */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }}>

                {/* Menue Icon */}
                <Image style={{ width: RFPercentage(5.8), height: RFPercentage(5.8), position: 'absolute', left: RFPercentage(2) }} sty source={require('../../assets/images/menue.png')} />

                {/* Heading */}
                <Text style={{ color: "#333333", fontSize: RFPercentage(2.5), fontFamily: 'Rubik_500Medium' }}>
                    Settings
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', marginTop: RFPercentage(1) }}>

                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(8) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Currency(Kash)
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />

                    <Text style={{ marginTop: RFPercentage(5), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_700Bold' }}>
                        Wallet
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Account Address
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />
                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("RecoveryPhrase")} >
                        <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                            Recovery Phrase
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />

                    <Text style={{ marginTop: RFPercentage(10), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_700Bold' }}>
                        Security and Data
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.4) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Change Pin
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />
                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                            Require PIN on App Open
                        </Text>
                        <View style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                            <Switch
                                trackColor={{ false: "#D0D0D0", true: theme.darkBlue }}
                                thumbColor={isEnabled ? theme.white : theme.lightGrey}
                                ios_backgroundColor="#D0D0D0"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: RFPercentage(0.08), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />
                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                            Share Analytics
                        </Text>
                        <View style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                            <Switch
                                trackColor={{ false: "#D0D0D0", true: theme.darkBlue }}
                                thumbColor={isEnabled2 ? theme.white : theme.lightGrey}
                                ios_backgroundColor="#D0D0D0"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                        </View>
                    </View>

                    <Text style={{ marginTop: RFPercentage(12), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_700Bold' }}>
                        Legal
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.08), backgroundColor: theme.line, marginTop: RFPercentage(2) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Licenses
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.08), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Terms of service
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.08), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />
                    <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Privacy Policy
                    </Text>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(2.8) }} />

                    <Text style={{ marginTop: RFPercentage(6), marginLeft: RFPercentage(6), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                        Reset Wakala
                    </Text>

                    <View style={{ marginBottom: RFPercentage(15), marginTop: RFPercentage(3), alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: '#333333', fontFamily: 'Rubik_400Regular' }}>
                            Resetting will remove your account from this device. Your funds will remian in the acount, but will only be accessible with your account key.
                        </Text>
                    </View>

                </View>
            </ScrollView>

        </Screen>
    );
}

export default SettingsScreen;