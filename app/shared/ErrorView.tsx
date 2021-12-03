import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export function ErrorView(props: { onPress: () => void }) {
    const globalStyle = require("../assets/style");

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#2A2A2A",
            height: '100%',
            justifyContent: "center",
            alignItems: "center"
        },
        textStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red'
        },
        btn: {
            marginTop: 30,
            marginBottom: 0,
            width: 180,
            height: 45,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center"
        },
        btnText: {
            fontSize: 18,
            fontWeight: 'bold',
        }
    })

    return <View style={[styles.container]}>
        <Text style={[styles.textStyle]}>An error did occur fetching the API</Text>
        <TouchableOpacity style={[globalStyle.btnStyle, styles.btn]} onPress={props.onPress}>
            <Text style={styles.btnText}>Try again</Text>
        </TouchableOpacity>
    </View>;
}