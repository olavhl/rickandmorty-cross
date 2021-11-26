import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import useApi from "../hooks/useApi";
import {ApiProps, Character} from "../types/Props";
import RickAndMortyApi from "../api/RickAndMortyApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {CircleIcon} from "../components/CircleIcon";
import {ModalView} from "../components/modal/ModalView";

const RocketRidePage = () => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const [modalVisible, setModalVisible] = useState(false)
    const [characterOne, setCharacterOne] = useState<Character>()
    const globalStyle = require("../assets/style");

    useEffect(() => {
        getCharacters().then(() => console.log("Fetched API"))
    }, [])

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false)
    }

    const handleClickedCharacter = (clickedCharacter: Character) => {
        setCharacterOne(clickedCharacter)
    }

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return <SafeAreaView style={[globalStyle.mainBackground, styles.container]}>
        <Text style={[globalStyle.textColor, styles.textStyles]}>Select Characters for Rocket Ride</Text>
        <View style={styles.addUsers}>
            <TouchableOpacity onPress={() => showModal()}>
                <CircleIcon widthAndHeight={100} circleColor={"#8685EF"} imageName={"user-plus"} imageSize={50}/>
            </TouchableOpacity>
            <View style={{flex: 0.2}}/>
            <TouchableOpacity onPress={() => showModal()}>
                <CircleIcon widthAndHeight={100} circleColor={"#63B9C1"} imageName={"user-plus"}
                            imageSize={50}/>
            </TouchableOpacity>

        </View>
        {modalVisible && data && <ModalView onClickedCharacter={() => handleClickedCharacter} characters={data.results} onPress={() => hideModal()}/>}
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
})

export default RocketRidePage;