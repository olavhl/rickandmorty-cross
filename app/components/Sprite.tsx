import React from "react";
import {Image, ImageSourcePropType} from "react-native";

type Props = { uri: string, height: number, width: number, style?: object, key?: number }

export function Sprite({uri, height, width, style, key}: Props) {
    const image: ImageSourcePropType = {
        uri, width, height
    }

    return <Image key={key} style={style} source={image} />;
}