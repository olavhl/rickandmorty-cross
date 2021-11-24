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

    return <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={ListPage} />
        <Stack.Screen name={"Details"} component={CharacterDetailsPage} />
    </Stack.Navigator>
}

export default CharactersStackNavigations;