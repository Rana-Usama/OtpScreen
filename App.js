import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage } from 'react-native-responsive-fontsize';

//screen
import OtpScreens from './app/screens/OtpScreens';
import AccountAddress from './app/screens/AccountAddress';
import HelpScreen from './app/screens/HelpScreen';
import PinSuccessScreen from './app/screens/PinSuccessScreen';
import ContactSupportScreen from './app/screens/ContactSupportScreen';
import SettingsScreen from './app/screens/SettingsScreen';

//custom fonts
import { Rubik_500Medium, Rubik_400Regular, Rubik_700Bold, useFonts } from "@expo-google-fonts/rubik"
import { DMSans_700Bold, DMSans_700Bold_Italic } from "@expo-google-fonts/dm-sans"

//config
import theme from './app/config/theme';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_700Bold,
    DMSans_700Bold,
    DMSans_700Bold_Italic
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={theme.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AccountAddress">
        <Stack.Screen name="OtpScreens" component={OtpScreens} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="ContactSupportScreen" component={ContactSupportScreen} />
        <Stack.Screen name="PinSuccessScreen" component={PinSuccessScreen} />
        <Stack.Screen name="AccountAddress" component={AccountAddress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


