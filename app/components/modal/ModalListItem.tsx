import {Character} from "../../types/Props";
import React from "react";
import {Sprite} from "../Sprite";
import {GestureResponderEvent, TouchableHighlight} from "react-native";

type Props = {
    character: Character;
    onPress: (event: GestureResponderEvent) => void;
}

export function ModalListItem({character, onPress}: Props) {
    const styles = {
        borderRadius: 50,
        margin: 5
    }

    return <TouchableHighlight onPress={onPress}>
            <Sprite style={styles} uri={character.image} height={55} width={55} />
        </TouchableHighlight>
}