import {ActivityIndicator} from "react-native";
import React from "react";

export function LoadingView(props: { animating: boolean }) {
    return <ActivityIndicator animating={props.animating} size={"large"}/>;
}