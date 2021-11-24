import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {CharacterProps} from "../../types/Props";
import {Sprite} from "../Sprite";

function CharacterListItem({ character }: CharacterProps) {
    return <View style={styles.container}>
        <Sprite uri={character.image} height={50} width={50} />
        <Text style={styles.text}>{character.name}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        marginLeft: 15,
    }
})

export default CharacterListItem;