import {Text, View} from "react-native";
import React from "react";
import {CharacterProps} from "../../types/Props";

function CharacterListItem({ character }: CharacterProps) {
    return <View>
        <Text>{character.name}</Text>
    </View>;
}

export default CharacterListItem;