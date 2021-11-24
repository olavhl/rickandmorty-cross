import React from "react";
import {Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";

const CharacterDetailsPage = ({route}: NativeStackScreenProps<RootStackParamList, "Details">) => {
    const character = route.params.character

    return <Text>{character.name}</Text>
}

export default CharacterDetailsPage;