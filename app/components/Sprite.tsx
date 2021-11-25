import React from "react";
import {Image, ImageSourcePropType} from "react-native";

type Props = { uri: string, height: number, width: number, style?: object }

export function Sprite({uri, height, width, style}: Props) {
    const image: ImageSourcePropType = {
        uri, width, height
    }

    return <Image style={style} source={image} />;
}