import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import ListPage from "../pages/ListPage";
import React from "react";

export function TabNavigation() {
    const Tab = createBottomTabNavigator();


    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={ListPage}/>
            <Tab.Screen name={"Map"} component={ListPage}/>
        </Tab.Navigator>
    </NavigationContainer>;
}