import {Button, Text} from "react-native";
import React from "react";

export function ErrorView(props: { onPress: () => (...args: unknown[]) => Promise<void> }) {
    return <>
        <Text>An error did occur</Text>
        <Button title={"Try again"} onPress={props.onPress}/>
    </>;
}