import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {CircleIcon} from "../CircleIcon";

type Props = {
    iconName: string;
    textName: string;
    circleColor: string;
}

export function DetailsInfo({iconName, textName, circleColor}: Props) {
    const globalStyle = require("../../assets/style");
    const styles = StyleSheet.create({
        iconContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '60%'
        },

        textContainer: {
            flex: 1,
            justifyContent: 'center',
            height: 65,
        },
        textStyle: {
            fontSize: 18,
        }
    })

    return <View style={styles.iconContainer}>
        <CircleIcon widthAndHeight={65} circleColor={circleColor} imageName={iconName} imageSize={40}/>
        <View style={{flex: 0.1}}/>
        <View style={styles.textContainer}>
            <Text style={[globalStyle.textColor, styles.textStyle]}>{textName}</Text>
        </View>
    </View>;
}

