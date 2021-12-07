import React, {useContext, useState} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Character} from "../types/Props";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ModalView} from "../components/modal/ModalView";
import {RocketUserSelection} from "../components/RocketUserSelection";
import {FontAwesome5} from "@expo/vector-icons";
import AnimationModal from "../components/animations/AnimationModal";
import {CharacterContext, CharacterContextType} from "../context/CharacterContext";
import {BlueButton} from "../components/BlueButton";

const RocketRidePage = () => {
    const {characters, loading, error, getCharacters} = useContext(CharacterContext) as CharacterContextType;
    const [modalVisible, setModalVisible] = useState(false)
    const [animationModalVisible, setAnimationModalVisible] = useState(false)
    const [characterOne, setCharacterOne] = useState<Character>()
    const [characterTwo, setCharacterTwo] = useState<Character>()
    const globalStyle = require("../assets/style");

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const rocketRide = () => setAnimationModalVisible(true)
    const closeRocketRide = () => setAnimationModalVisible(false)

    // Setting characters when one is picked from modal
    const handleClickedCharacter = (clickedCharacter: Character) => {
        if (!characterOne) {
            setCharacterOne(clickedCharacter)
        } else {
            setCharacterTwo(clickedCharacter)
        }
        hideModal()
    }

    const replay = () => {
        setCharacterOne(undefined)
        setCharacterTwo(undefined)
    }

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return <SafeAreaView style={[globalStyle.mainBackground, globalStyle.container]}>
        <Text style={[globalStyle.textColor, globalStyle.textStyles]}>
            Select Characters for Rocket Ride
        </Text>

        <View style={styles.addUsers}>
            <RocketUserSelection character={characterOne} circleColor={"#8685EF"} showModal={() => showModal()}/>
            <View style={{flex: 0.2}}/>
            <RocketUserSelection character={characterTwo} circleColor={"#63B9C1"} showModal={() => showModal()}/>
        </View>

        {/* Ride Rocket Button */}
        {characterOne && characterTwo &&
            <BlueButton width={200} onPress={rocketRide} btnText={"Ride the Rocket"} />
        }


        {/* Replay Button */}
        {characterOne &&
            <TouchableOpacity style={[styles.replayBtn, globalStyle.btnStyle]} onPress={replay}>
                <FontAwesome5 name={"undo"} size={25} color={"white"}/>
            </TouchableOpacity>
        }

        {/* Choose Characters-Modal */}
        {modalVisible && characters &&
            <ModalView onClickedCharacter={handleClickedCharacter} characters={characters} onPress={() => hideModal()}/>
        }

        {/* Animation-Modal */}
        { animationModalVisible &&
            <AnimationModal showModal={animationModalVisible} closeModal={closeRocketRide} characterOne={characterOne} characterTwo={characterTwo}/>
        }
    </SafeAreaView>
}

const styles = StyleSheet.create({
    addUsers: {
        width: '100%',
        justifyContent: "center",
        flex: 1,
        flexDirection: 'row'
    },
    replayBtn: {
        width: 60
    }
})

export default RocketRidePage;