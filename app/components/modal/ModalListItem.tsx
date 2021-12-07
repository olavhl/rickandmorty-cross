import {Character} from "../../types/Props";
import React from "react";
import {Sprite} from "../Sprite";
import {TouchableHighlight} from "react-native";

type Props = {
    character: Character;
    onPress: (clickedCharacter: Character) => void;
}

// Component for displaying images in each Modal for RocketRide
export function ModalListItem({character, onPress}: Props) {
    const styles = {
        borderRadius: 50,
        margin: 5
    }

    return <TouchableHighlight onPress={() => onPress(character)}>
        <Sprite style={styles} uri={character.image} height={55} width={55}/>
    </TouchableHighlight>
}