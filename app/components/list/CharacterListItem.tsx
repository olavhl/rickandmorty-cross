import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {CharacterProps} from "../../types/Props";

function CharacterListItem({ character }: CharacterProps) {
    const styles = StyleSheet.create({
        container: {
            padding: 15,
            marginLeft: 15,
            marginRight: 15,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
        },
        text: {
            fontSize: 16,
        }
    })

    return <View style={styles.container}>
        <Text style={styles.text}>{character.name}</Text>
    </View>;
}

export default CharacterListItem;