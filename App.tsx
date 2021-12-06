import React from 'react';
import {TabNavigation} from "./app/shared/navigation/TabNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {CharacterProvider} from "./app/context/CharacterContext";
import {EpisodeProvider} from "./app/context/EpisodeContext";

export default function App() {
    return (
        <CharacterProvider>
            <EpisodeProvider>
                <NavigationContainer>
                    <TabNavigation/>
                </NavigationContainer>
            </EpisodeProvider>
        </CharacterProvider>
    )
}


