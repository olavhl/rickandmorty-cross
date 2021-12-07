import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

// Component when API is Loading
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