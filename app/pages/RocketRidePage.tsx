import React, {useEffect} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import useApi from "../hooks/useApi";
import {ApiProps} from "../types/Props";
import RickAndMortyApi from "../api/RickAndMortyApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {FontAwesome5} from "@expo/vector-icons";
import {CircleIcon} from "../components/CircleIcon";

const RocketRidePage = () => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const globalStyle = require("../assets/style");

    useEffect(() => {
        getCharacters()
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return <SafeAreaView style={[globalStyle.mainBackground, styles.container]}>
            <Text style={[globalStyle.textColor, styles.textStyles]}>Select Characters for Rocket Ride</Text>
        <View style={styles.addUsers}>
            <CircleIcon widthAndHeight={100} circleColor={"#8685EF"} imageName={"user-plus"} imageSize={50} />
            <View style={{flex: 0.2}} />
            <CircleIcon widthAndHeight={100} circleColor={"#63B9C1"} imageName={"user-plus"} imageSize={50} />
        </View>
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
    }
})

export default RocketRidePage;