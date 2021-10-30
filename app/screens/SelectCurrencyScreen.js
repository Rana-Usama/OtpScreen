import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';

//components
import Screen from './../components/Screen';

//config
import theme from '../config/theme';

function SelectCurrencyScreen(props) {

    const data = [
        {
            label: ' '
        },

    ];

    const list = [


        {
            currencyText: 'KES'
        },
        {
            currencyText: 'CAD'
        },
        {
            currencyText: 'EUR'
        },
        {
            currencyText: 'MXN'
        },
        {
            currencyText: 'COP'
        },
        {
            currencyText: 'UGX'
        },
        {
            currencyText: 'CAD'
        },
        {
            currencyText: 'BRL'
        },
        {
            currencyText: 'CVE'
        },
        {
            currencyText: 'EUR'
        },
        {
            currencyText: 'MXN'
        },
        {
            currencyText: 'COP'
        },
        {
            currencyText: 'USD'
        },
    ]

    return (
        <Screen statusBarColor="#E5E5E5" style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#F5F5F5" }}>

            {/* Nav */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }}>

                {/* Back Icon */}
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.2), position: 'absolute', left: RFPercentage(2) }} color={theme.darkBlue} />
                {/* Heading */}
                <Text style={{ color: "#333333", fontSize: RFPercentage(2.5), fontFamily: 'Rubik_500Medium' }}>
                    Select Currency
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', marginTop: RFPercentage(1) }}>

                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(7) }} />
                    <View style={{ marginTop: RFPercentage(3), width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ marginLeft: RFPercentage(2), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                            USD
                        </Text>
                        <View style={{ marginLeft: RFPercentage(5), marginBottom: RFPercentage(1) }}>
                            <RadioButtonRN
                                data={data}
                                // deactiveColor={theme.white}
                                activeColor={theme.darkBlue}
                                box={false}
                                selectedBtn={(e) => console.log(e)}
                            />

                        </View>
                    </View>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(3) }} />

                    {list.map((item, i) => (
                        <View key={i} style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                            <View style={{ marginTop: RFPercentage(3), width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={{ marginLeft: RFPercentage(2), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                                    {item.currencyText}
                                </Text>
                                <View style={{ marginLeft: RFPercentage(5), marginBottom: RFPercentage(1) }}>
                                    <RadioButtonRN
                                        data={data}
                                        // deactiveColor={theme.white}
                                        activeColor={theme.darkBlue}
                                        box={false}
                                        selectedBtn={(e) => console.log(e)}
                                    />

                                </View>
                            </View>
                            <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(3) }} />
                        </View>

                    ))}


                </View>
            </ScrollView>

        </Screen>
    );
}

export default SelectCurrencyScreen;