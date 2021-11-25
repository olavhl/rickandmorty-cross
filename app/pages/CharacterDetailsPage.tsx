import React from "react";
import {Dimensions, Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";
import {Sprite} from "../components/Sprite";

const CharacterDetailsPage = ({route}: NativeStackScreenProps<RootStackParamList, "Details">) => {
    const character = route.params.character

    const width = (Dimensions.get('window').width) * 0.8;


    return (<>
        <Sprite uri={character.image} height={width} width={width} />
        <Text>{character.name}</Text>
    </>)
}

export default CharacterDetailsPage;