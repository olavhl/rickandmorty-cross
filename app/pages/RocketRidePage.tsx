import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import useApi from "../hooks/useApi";
import {ApiProps, Character} from "../types/Props";
import RickAndMortyApi from "../api/RickAndMortyApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ModalView} from "../components/modal/ModalView";
import {RocketUserSelection} from "../components/RocketUserSelection";

const RocketRidePage = () => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const [modalVisible, setModalVisible] = useState(false)
    const [characterOne, setCharacterOne] = useState<Character>()
    const [characterTwo, setCharacterTwo] = useState<Character>()
    const globalStyle = require("../assets/style");

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

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

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return <SafeAreaView style={[globalStyle.mainBackground, styles.container]}>
        <Text style={[globalStyle.textColor, styles.textStyles]}>
            Select Characters for Rocket Ride
        </Text>

        <View style={styles.addUsers}>
            <RocketUserSelection character={characterOne} circleColor={"#8685EF"} showModal={() => showModal()}/>
            <View style={{flex: 0.2}}/>
            <RocketUserSelection character={characterTwo} circleColor={"#63B9C1"} showModal={() => showModal()}/>
        </View>


        {characterOne && characterTwo &&
            <TouchableOpacity style={styles.rideBtn} onPress={() => console.log("ridin")}>
                <Text style={styles.rideBtnText}>Ride the Rocket</Text>
            </TouchableOpacity>
        }

        {modalVisible && data &&
        <ModalView onClickedCharacter={handleClickedCharacter} characters={data.results} onPress={() => hideModal()}/>}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles: {
        width: '80%',
        marginTop: 50,
        fontWeight: 'bold',
        flex: 0.5,
        fontSize: 25,
        textAlign: 'center',
    },
    addUsers: {
        width: '100%',
        justifyContent: "center",
        flex: 1,
        flexDirection: 'row'
    },
    rideBtn: {
        backgroundColor: "#589ecc",
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100
    },
    rideBtnText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    }
})

export default RocketRidePage;