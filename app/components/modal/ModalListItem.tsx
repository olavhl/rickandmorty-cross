import {Character} from "../../types/Props";
import React from "react";
import {Sprite} from "../Sprite";
import {TouchableHighlight, View} from "react-native";

type Props = {
    character: Character;
    onPress: (clickedCharacter: Character) => void;
    listKey: number;
}

export function ModalListItem({character, onPress, listKey}: Props) {
    const styles = {
        borderRadius: 50,
        margin: 5
    }

    return <View key={listKey}>
        <TouchableHighlight onPress={() => onPress(character)}>
                <Sprite style={styles} uri={character.image} height={55} width={55} />
            </TouchableHighlight>
    </View>
}