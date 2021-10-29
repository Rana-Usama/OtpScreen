import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function OtpScreens(props) {
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')



    const [value, setValue] = useState('');

    const handleChange = (text) => {
        if (value.length < 6) {
            setValue(value + text)
        }

        if (value.length == 5) {
            showWarn(true)
        }

    }

    const handleClear = () => {
        showWarn(false);
        let temp = value;
        let newValue = temp.slice(0, -1);
        setValue(newValue)
    }

    const [warn, showWarn] = useState(false)

    const handleLastValue = (text) => {
        setValue6(text)

        if (value1 && value2 && value3 && value4 && value5 && text) {
            showWarn(true)
            console.log("dshf")
        } else {
            showWarn(false)
        }
    }

    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#F2F0F0" }}>
            {/* Back Icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4), top: RFPercentage(7) }}>
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                {
                    warn ?
                        <Text style={{ marginTop: RFPercentage(7), fontSize: RFPercentage(2.5), color: Colors.warn }}>
                            PINs do not match
                        </Text> : null
                }
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: warn ? RFPercentage(7) : RFPercentage(16), fontSize: RFPercentage(3.5), color: Colors.primary, fontWeight: 'bold' }}>
                    {warn ? "Confirm New PIN" : "Enter Old PIN"}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: RFPercentage(2) }}>
                {/* First input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[0] === "" || value[0] === undefined) ? "" : "*"}
                    </Text>
                </View>
                {/* second input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[1] === "" || value[1] === undefined) ? "" : "*"}
                    </Text>
                </View>
                {/* third input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[2] === "" || value[2] === undefined) ? "" : "*"}
                    </Text>
                </View>
                {/* fourth input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[3] === "" || value[3] === undefined) ? "" : "*"}
                    </Text>
                </View>
                {/* fifth input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[4] === "" || value[4] === undefined) ? "" : "*"}
                    </Text>
                </View>
                {/* sixth input */}
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: warn ? 'red' : Colors.black, fontSize: RFPercentage(5) }}>
                        {(value[5] === "" || value[5] === undefined) ? "" : "*"}
                    </Text>
                </View>
            </View>

            {/* Keypad */}
            <View style={{ width: '100%', height: RFPercentage(53), position: 'absolute', bottom: 0, backgroundColor: Colors.white }}>

                {/* First row */}
                <View style={{ marginTop: RFPercentage(6), width: '80%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0 }} >
                        <Text onPress={() => handleChange('1')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text onPress={() => handleChange('2')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
                        <Text onPress={() => handleChange('3')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            3
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* second row */}
                <View style={{ marginTop: RFPercentage(6), width: '80%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0 }} >
                        <Text onPress={() => handleChange('4')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text onPress={() => handleChange('5')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: 0 }} >
                        <Text onPress={() => handleChange('6')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            6
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* third row */}
                <View style={{ marginTop: RFPercentage(6), width: '80%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0 }} >
                        <Text onPress={() => handleChange('7')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            7
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text onPress={() => handleChange('8')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: 0 }} >
                        <Text onPress={() => handleChange('9')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            9
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Fourth  row*/}
                <View style={{ marginTop: RFPercentage(6), width: '80%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0 }}  >
                        {/* Dummy entry */}
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3.4) }}>
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Text onPress={() => handleChange('0')} style={{ fontFamily: 'DMSans_700Bold', color: Colors.keypad, fontSize: RFPercentage(3.4) }}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClear()} style={{ position: 'absolute', right: 0 }} >
                        <Image source={require('../../assets/images/cross.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}

export default OtpScreens;