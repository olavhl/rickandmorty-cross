import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Character} from "../../types/Props";
import {ModalListItem} from "./ModalListItem";

type Props = {
    onPress: () => void;
    characters: Character[];
    onClickedCharacter: (clickedCharacter: Character) => void;
}

// Modal to select users for rocketride
export function ModalView({onPress, characters, onClickedCharacter}: Props) {
    const globalStyle = require("../../assets/style");
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        modalText: {
            marginTop: 75,
            marginBottom: 75,
            marginLeft: 20,
            marginRight: 20,
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
        },
        closeBtn: {
            width: 125,
            height: 40,
            borderWidth: .5,
            borderColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })

    const displayCharacters = () => {
        return characters.map((character: Character, key) => <View key={key}><ModalListItem onPress={onClickedCharacter}
                                                                                            character={character}/></View>)
    }

    return <View style={styles.modalContainer}>
        <Modal animationType={"slide"} transparent={true}>
            <View style={styles.modalText}>
                <Text style={[globalStyle.textColor, {fontSize: 25}]}>
                    Select Characters
                </Text>
                <View style={styles.characterContainer}>
                    {displayCharacters()}
                </View>
                <Pressable style={styles.closeBtn} onPress={onPress}>
                    <Text style={[{fontSize: 20}, globalStyle.textColor]}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    </View>;
}