import {Character} from "../../api/RickAndMortyApi";
import {Text, View} from "react-native";
import React from "react";

type CharacterProps = {
    character: Character
}

function CharacterListItem({ character}: CharacterProps) {
    return <View>
        <Text>{character.name}</Text>
    </View>;
}

export default CharacterListItem;