import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Modal, TouchableOpacity, Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';


//components
import Screen from './../components/Screen';

//config
import theme from '../config/theme';


function ResetAccountScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);


    return (
        <Screen statusBarColor="#E5E5E5" style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#F5F5F5" }}>

            {/* Nav */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(5) }}>
                {/* Menue Icon */}
                <Image style={{ width: RFPercentage(5.8), height: RFPercentage(5.8), position: 'absolute', left: RFPercentage(2) }} sty source={require('../../assets/images/menue.png')} />
            </View>

            <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(8) }} />
            <View style={{ marginTop: RFPercentage(3), width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={{ marginLeft: RFPercentage(2), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                    Profile
                </Text>
            </View>
            <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(3) }} />
            <TouchableOpacity onPress={() => setPickerModel(true)} style={{ marginTop: RFPercentage(3), width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={{ marginLeft: RFPercentage(2), color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_400Regular' }}>
                    Currency(Ksh)
                </Text>
            </TouchableOpacity>
            <View style={{ width: '100%', height: RFPercentage(0.1), backgroundColor: theme.line, marginTop: RFPercentage(3) }} />


            {/* Model */}
            <Modal visible={pickerModel} transparent={true} >

                <LinearGradient colors={['#F7EFFA', '#FCF8ED']} start={[1, 0.7]} end={[1, 0.1]} style={{ borderTopLeftRadius: RFPercentage(4), borderTopRightRadius: RFPercentage(4), position: 'absolute', bottom: 0, alignSelf: 'center', alignItems: "center", justifyContent: 'flex-start', width: "100%", height: RFPercentage(60) }} >

                    <View style={{ marginTop: RFPercentage(7), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_500Medium', fontSize: RFPercentage(2.6) }}>
                            Without your account key
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_500Medium', fontSize: RFPercentage(2.6) }}>
                            You will lose access to your
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_500Medium', fontSize: RFPercentage(2.6) }}>
                            Funds Forever
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(6), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2.2) }}>
                            In order to reset Wakala, you will need to
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2.2) }}>
                            confirm you’ve written your account key.
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(6), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2.1) }}>
                            Nobody, not even Wakala, can recover your
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(1), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "#333333", fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2.1) }}>
                            account without key
                        </Text>
                    </View>

                    <View style={{ position: 'absolute', bottom: RFPercentage(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '80%' }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setPickerModel(false)}>
                            <Text style={{ color: theme.black, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_500Medium' }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setPickerModel(false)} style={{ position: 'absolute', right: 0 }}>
                            <Text style={{ color: theme.darkBlue, fontSize: RFPercentage(2.6), fontFamily: 'Rubik_500Medium' }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

            </Modal>



        </Screen>
    );
}

export default ResetAccountScreen;