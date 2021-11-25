import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";
import React from "react";
import CharactersStackNavigations from "./CharactersStackNavigations";
import RocketRidePage from "../../pages/RocketRidePage";

export type RootTabParamsList = {
    Characters: undefined;
    Rocket: undefined;
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<RootTabParamsList>();
    const tabStyle = {
        backgroundColor: "#2A2A2A",
        borderTopWidth: 0,
    };

    return <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={"Characters"} component={CharactersStackNavigations} options={{
                tabBarLabel: () => null,
                tabBarStyle: tabStyle,
                tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"list"} size={size} color={color}/>
            }}/>
            <Tab.Screen name={"Rocket"} component={RocketRidePage} options={{
                tabBarLabel: () => null,
                tabBarStyle: tabStyle,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: "#2A2A2A",
                },
                headerTitleStyle: {
                    color: "#FFFFFF",
                },
                tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"rocket"} size={size} color={color}/>
            }}/>
        </Tab.Navigator>;
}
