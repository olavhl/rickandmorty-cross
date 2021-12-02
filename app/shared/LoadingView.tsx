import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

export function LoadingView(props: { animating: boolean }) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#2A2A2A",
            height: '100%',
            justifyContent: "center"
        },
    })

    return <View style={styles.container}>
        <ActivityIndicator animating={props.animating} size={"large"}/>
    </View>;
}