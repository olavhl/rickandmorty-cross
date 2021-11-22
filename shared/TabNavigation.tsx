import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import ListPage from "../pages/ListPage";
import React from "react";

export type RootStackParamsList = {
    Home: undefined;
    Map: undefined;
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<RootStackParamsList>();


    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={ListPage} options={{tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"list"} size={size} color={color} />
            }}/>
            <Tab.Screen name={"Map"} component={ListPage} options={{tabBarIcon: ({color, size}) =>
                    <FontAwesome5 name={"cog"} size={size} color={color} />
            }}/>
        </Tab.Navigator>
    </NavigationContainer>;
}