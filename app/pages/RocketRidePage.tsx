import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import useApi from "../hooks/useApi";
import {ApiProps, Character} from "../types/Props";
import RickAndMortyApi from "../api/RickAndMortyApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ModalView} from "../components/modal/ModalView";
import {RocketUserSelection} from "../components/RocketUserSelection";
import {FontAwesome5} from "@expo/vector-icons";
import AnimationModal from "../components/animations/AnimationModal";

const RocketRidePage = () => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const [modalVisible, setModalVisible] = useState(false)
    const [animationModalVisible, setAnimationModalVisible] = useState(false)
    const [characterOne, setCharacterOne] = useState<Character>()
    const [characterTwo, setCharacterTwo] = useState<Character>()
    const globalStyle = require("../assets/style");

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const rocketRide = () => setAnimationModalVisible(true)
    const closeRocketRide = () => setAnimationModalVisible(false)

    useEffect(() => {
        getCharacters().then(() => console.log("Fetched API"))
    }, [])


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

        {characterOne && characterTwo &&
        <TouchableOpacity style={[styles.rideBtn, styles.rideAndReplayBtn]} onPress={rocketRide}>
            <Text style={styles.rideBtnText}>Ride the Rocket</Text>
        </TouchableOpacity>
        }

        {/* Possibility to replay */}
        {characterOne &&
        <TouchableOpacity style={[styles.replayBtn, styles.rideAndReplayBtn]} onPress={replay}>
            <FontAwesome5 name={"undo"} size={25} color={"white"}/>
        </TouchableOpacity>
        }

        {modalVisible && data &&
        <ModalView onClickedCharacter={handleClickedCharacter} characters={data.results} onPress={() => hideModal()}/>}

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
    rideAndReplayBtn: {
        backgroundColor: "#589ecc",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100
    },
    rideBtn: {
        width: 200,
    },
    rideBtnText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    },
    replayBtn: {
        width: 60
    }
})

export default RocketRidePage;