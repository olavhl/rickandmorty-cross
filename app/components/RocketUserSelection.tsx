import {Character} from "../types/Props";
import {Sprite} from "./Sprite";
import {TouchableOpacity} from "react-native";
import {CircleIcon} from "./CircleIcon";
import React from "react";

type Props = {
    character?: Character;
    circleColor: string;
    showModal?: () => void;
}

export function RocketUserSelection({character, circleColor, showModal}: Props) {
    const displayClickedUser = (character: Character) => {
        const style = {
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }

        return <Sprite uri={character.image} height={100} width={100} style={style}/>
    }

    return <>
        {character ? displayClickedUser(character) :
            <TouchableOpacity onPress={showModal}>
                <CircleIcon widthAndHeight={100} circleColor={circleColor} imageName={"user-plus"}
                            imageSize={50}/>
            </TouchableOpacity>
        }
    </>;
}