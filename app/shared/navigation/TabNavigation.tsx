import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";
import ListPage from "../../pages/ListPage";
import React from "react";
import CharactersStackNavigations from "./CharactersStackNavigations";

export type RootTabParamsList = {
    Characters: undefined;
    Map: undefined;
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<RootTabParamsList>();

    return <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={"Characters"} component={CharactersStackNavigations} options={{
                tabBarStyle: {
                    backgroundColor: "#2A2A2A",
                    borderTopWidth: 0,
                },
                tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"list"} size={size} color={color}/>
            }}/>
            <Tab.Screen name={"Map"} component={ListPage} options={{
                tabBarStyle: {
                    backgroundColor: "#2A2A2A",
                    borderTopWidth: 0,
                },
                tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"cog"} size={size} color={color}/>
            }}/>
        </Tab.Navigator>;
}
