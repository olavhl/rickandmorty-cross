import React, {useContext, useEffect} from "react";
import {FlatList, SafeAreaView, Text} from "react-native";
import {EpisodeContext, EpisodeContextType} from "../context/EpisodeContext";
import {CharacterContext, CharacterContextType} from "../context/CharacterContext";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {EpisodeListItem} from "../components/list/EpisodeListItem";

const EpisodePage = () => {
    const {episodes, loading: episodeLoading, error: episodeError, getEpisodes} = useContext(EpisodeContext) as EpisodeContextType;
    const {loading: characterLoading, error: characterError, getCharacters} = useContext(CharacterContext) as CharacterContextType;

    const globalStyle = require("../assets/style");

    useEffect(() => {
        console.log(episodes)
    }, [])

    if (episodeLoading) {
        return <LoadingView animating={episodeLoading}/>
    } else if (characterLoading) {
        return <LoadingView animating={characterLoading}/>
    }

    if (episodeError) {
        return <ErrorView onPress={() => getEpisodes}/>
    } else if (characterError) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return <SafeAreaView style={[globalStyle.mainBackground, globalStyle.container]}>
        <FlatList horizontal={true} data={episodes} renderItem={({item}) => <EpisodeListItem episode={item}/>} />

        <Text style={globalStyle.textColor}>Hello</Text>
    </SafeAreaView>
}

export default EpisodePage;