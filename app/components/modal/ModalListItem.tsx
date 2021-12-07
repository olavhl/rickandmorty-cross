import {Character} from "../../types/Props";
import React from "react";
import {Sprite} from "../Sprite";
import {TouchableHighlight, View} from "react-native";

type Props = {
    character: Character;
    onPress: (clickedCharacter: Character) => void;
}

export function ModalListItem({character, onPress}: Props) {
    const styles = {
        borderRadius: 50,
        margin: 5
    }

    return <View>
        <TouchableHighlight onPress={() => onPress(character)}>
                <Sprite style={styles} uri={character.image} height={55} width={55} />
            </TouchableHighlight>
    </View>
}