import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Episode} from "../../types/Props";

type Props = {
    episode: Episode;
}

const EpisodeListItem = ({episode}: Props) => {
    let episodeNumber;
    let seasonNumber;

    const createSeasonAndEpisodeString = () => {
        let stringArray = episode.episode.split("E")
        episodeNumber = stringArray[1]
        seasonNumber = stringArray[0].substring(1)
    }

    createSeasonAndEpisodeString()

    return <View style={styles.cards}>
        <View style={styles.container}>
            <Text style={styles.title}>{episode.name}</Text>
            <Text>Episode {episodeNumber}, Season {seasonNumber}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    cards: {
        borderRadius: 20,
        height: 150,
        width: 275,
        backgroundColor: "#8685EF",
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        justifyContent: "center",
    },
    container: {
        padding: 20
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    }
})

export default EpisodeListItem;