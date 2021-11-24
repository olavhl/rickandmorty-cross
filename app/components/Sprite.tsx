import React from "react";
import {Image, ImageSourcePropType} from "react-native";

type Props = { uri: string, height: number, width: number }

export function Sprite({uri, height, width}: Props) {
    const image: ImageSourcePropType = {
        uri, width, height
    }

    return <Image source={image} />;
}