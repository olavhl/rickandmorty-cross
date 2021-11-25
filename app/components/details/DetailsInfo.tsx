import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import React from "react";

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
        iconCircle: {
            width: 65,
            height: 65,
            backgroundColor: circleColor,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'

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
        <View style={styles.iconCircle}>
            <FontAwesome5 name={iconName} size={40} color={"#2A2A2A"}/>
        </View>
        <View style={{flex: 0.1}}/>
        <View style={styles.textContainer}>
            <Text style={[globalStyle.textColor, styles.textStyle]}>{textName}</Text>
        </View>
    </View>;
}

