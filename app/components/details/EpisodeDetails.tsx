import {Episode} from "../../types/Props";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {
    currentEpisode: Episode;
}

const EpisodeDetails = ({currentEpisode}: Props) => {
    let episodeNumber;
    let seasonNumber;

    const createSeasonAndEpisodeString = () => {
        let stringArray = currentEpisode.episode.split("E")
        episodeNumber = stringArray[1]
        seasonNumber = stringArray[0].substring(1)
    }

    createSeasonAndEpisodeString()

    return <View style={styles.container}>
        <Text style={styles.title}>{currentEpisode.name}</Text>
        <Text style={styles.textInfo}>Season: {seasonNumber}</Text>
        <Text style={styles.textInfo}>Episode: {episodeNumber}</Text>
        <Text style={styles.textInfo}>Air date: {currentEpisode.air_date}</Text>
        <Text style={styles.textInfo}>Characters: </Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 50,
        height: 400,
        marginBottom: 50,
        backgroundColor: "#63B9C1",
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20
    },
    textInfo: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 5
    }
})

export default EpisodeDetails;