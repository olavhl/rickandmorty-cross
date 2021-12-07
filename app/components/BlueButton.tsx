import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

type Props = {
    width: number;
    onPress: () => void;
    btnText: string;
}

// Generic button, to have the same styling and looks of the buttons
export function BlueButton({width, btnText, onPress}: Props) {
    const globalStyle = require("../assets/style");
    const styles = StyleSheet.create({
        btnWidth: {
            width: width
        }
    })

    return <TouchableOpacity style={[globalStyle.btnStyle, styles.btnWidth]} onPress={onPress}>
        <Text style={globalStyle.btnText}>{btnText}</Text>
    </TouchableOpacity>;
}