import {Image, ImageBackground, Modal, StyleSheet, View} from "react-native";
import React from "react";
import {Character} from "../../types/Props";

type Props = {
    showModal: boolean;
    characterOne?: Character;
    characterTwo?: Character;
}

const AnimationModal = ({ showModal, characterOne, characterTwo}: Props) => {
    return <Modal animationType={"fade"} visible={showModal}>
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode={"cover"} source={require("../../assets/space.gif")}>
                <Image source={require("../../assets/spacecar.png")}/>
            </ImageBackground>
        </View>
    </Modal>;
}

const styles = StyleSheet.create({
    container: {
      height: '100%'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    }
})

export default AnimationModal