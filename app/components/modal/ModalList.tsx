import {Character} from "../../types/Props";
import React from "react";
import {Sprite} from "../Sprite";

type Props = {
    character: Character;
    key: number;
}

export function ModalList({character, key}: Props) {
    const styles = {
        borderRadius: 50,
        margin: 5
    }

    return <Sprite key={key} style={styles} uri={character.image} height={55} width={55} />
}