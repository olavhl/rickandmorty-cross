import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Character} from "../../types/Props";
import {ModalListItem} from "./ModalListItem";

type Props = {
    onPress: () => void;
    characters: Character[];
    onClickedCharacter: (clickedCharacter: Character) => void;
}

export function ModalView({onPress, characters, onClickedCharacter}: Props) {
    const globalStyle = require("../../assets/style");
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        modalText: {
            marginTop: 180,
            marginBottom: 180,
            marginLeft: 40,
            marginRight: 40,
            backgroundColor: "#000000",
            borderRadius: 20,
            padding: 20,
            flex: 1,
            alignItems: "center",
        },
        characterContainer: {
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center"
        }
    })

    const displayCharacters = () => {
        return characters.map((character: Character) => <ModalListItem listKey={character.id} onPress={onClickedCharacter} character={character}/>)
    }

    return <View style={styles.modalContainer}>
        <Modal animationType={"slide"} transparent={true}>
            <View style={styles.modalText}>
                <Text style={[globalStyle.textColor]}>
                    Select Characters
                </Text>
                <View style={styles.characterContainer}>
                    {displayCharacters()}
                </View>
                <Pressable onPress={onPress}>
                    <Text style={[{fontSize: 50}, globalStyle.textColor]}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    </View>;
}