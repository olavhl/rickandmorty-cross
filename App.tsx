import React from 'react';
import {TabNavigation} from "./app/shared/navigation/TabNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {CharacterProvider} from "./app/context/CharacterContext";

export default function App() {
    return (
        <CharacterProvider>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </CharacterProvider>
    )
}


