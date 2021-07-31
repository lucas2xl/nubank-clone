import React from "react";
import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Home } from "../pages/Home";

enableScreens();
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
