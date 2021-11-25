import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListPage from "../../pages/ListPage";
import CharacterDetailsPage from "../../pages/CharacterDetailsPage";
import {Character} from "../../types/Props";

export type RootStackParamList = {
    Home: undefined;
    Details: { character: Character };
}

const CharactersStackNavigations = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const options = {
        headerStyle: {
            backgroundColor: "#2A2A2A",
        },
        headerTitleStyle: {
            color: "#FFFFFF",
        }
    }

    return <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={ListPage} options={options} />
        <Stack.Screen name={"Details"} component={CharacterDetailsPage} options={options} />
    </Stack.Navigator>
}

export default CharactersStackNavigations;