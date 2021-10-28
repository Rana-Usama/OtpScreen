import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';

function HelpScreen(props) {

    const Data = [
        {
            title: 'Frequently Asked Questions'
        },
        {
            title: 'Raise Account Limit'
        },
        {
            title: 'Ask the Community'
        },
        {
            title: 'Documentation'
        },
        {
            title: 'Contact'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#E5E5E5" }}>

            {/* Nav */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }}>

                {/* Menue Icon */}
                <Image style={{ width: RFPercentage(5.8), height: RFPercentage(5.8), position: 'absolute', left: RFPercentage(2) }} sty source={require('../../assets/images/menue.png')} />
                {/* Heading */}
                <Text style={{ color: "#333333", fontSize: RFPercentage(2.5), fontFamily: 'Rubik_500Medium' }}>
                    Help
                </Text>
            </View>

            {/* Saperator line and headings */}
            {Data.map((item, i) => (

                <View key={i} style={{ marginTop: i === 0 ? RFPercentage(10) : RFPercentage(3), width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.line }} />
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={{ marginTop: RFPercentage(2.6), marginLeft: RFPercentage(6), color: Colors.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                    {i === 4 ? <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.line, marginTop: RFPercentage(3) }} />
                        : null}
                </View>
            ))}

        </Screen>
    );
}

export default HelpScreen;