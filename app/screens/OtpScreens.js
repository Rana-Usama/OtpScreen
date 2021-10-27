import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/InputField';

//config
import Colors from '../config/Colors';

function OtpScreens(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "1",
            value: "",
        },
        {
            placeholder: "2",
            value: "",
        },
        {
            placeholder: "3",
            value: "",
        },
        {
            placeholder: "4",
            value: "",
        },
        {
            placeholder: "5",
            value: "",
        },
        {
            placeholder: "6",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            {/* Back Icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4), top: RFPercentage(7) }}>
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }}>
                {/* {fullText ? <Text style={{ color: "#ff0000", fontSize: RFPercentage(2.5) }}>
                    Pin is incorrect
                </Text> : null} */}
                <Text style={{ marginTop: RFPercentage(7), fontSize: RFPercentage(3.5), color: Colors.primary, fontWeight: 'bold' }}>
                    Enter Pin
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                        <InputField
                            backgroundColor={Colors.inputFieldBackgroundColor}
                            borderColor={"#E3E5E5"}
                            borderWidth={0}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2.3)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"30%"}
                        />
                    </View>
                ))}

            </View>


        </Screen>
    );
}

export default OtpScreens;