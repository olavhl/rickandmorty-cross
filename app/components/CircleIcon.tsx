import {StyleSheet, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import React from "react";

type Props = {
    widthAndHeight: number;
    circleColor: string;
    imageName: string;
    imageSize: number;
}

// Component to display icons with a custom color and width
export function CircleIcon({widthAndHeight, circleColor, imageName, imageSize}: Props) {
    const styles = StyleSheet.create({
        iconCircle: {
            width: widthAndHeight,
            height: widthAndHeight,
            backgroundColor: circleColor,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'

        },
    })

    return <View style={styles.iconCircle}>
        <FontAwesome5 name={imageName} size={imageSize} color={"#2A2A2A"}/>
    </View>;
}
