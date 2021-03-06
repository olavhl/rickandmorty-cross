import React, {useContext, useEffect, useState} from "react";
import {FlatList, SafeAreaView} from "react-native";
import {EpisodeContext, EpisodeContextType} from "../context/EpisodeContext";
import {CharacterContext, CharacterContextType} from "../context/CharacterContext";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import EpisodeListItem from "../components/list/EpisodeListItem";
import {Episode} from "../types/Props";
import EpisodeDetails from "../components/details/EpisodeDetails";

const EpisodePage = () => {
    // Fetching both characters and episodes to be able to handle loading and error
    // for both of the fetch-calls
    const {
        episodes,
        loading: episodeLoading,
        error: episodeError,
        getEpisodes
    } = useContext(EpisodeContext) as EpisodeContextType;
    const {
        loading: characterLoading,
        error: characterError,
        getCharacters
    } = useContext(CharacterContext) as CharacterContextType;
    const [currentEpisode, setCurrentEpisode] = useState<Episode>()

    const globalStyle = require("../assets/style");

    useEffect(() => {
        if (episodes) {
            setCurrentEpisode(episodes[0])
        }
    }, [episodes])

    const displayEpisode = (episode: Episode) => {
        setCurrentEpisode(episode)
    }

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
        <FlatList horizontal={true} data={episodes}
                  renderItem={({item}) => <EpisodeListItem episode={item} onPress={() => displayEpisode(item)}/>}/>
        {currentEpisode && <EpisodeDetails currentEpisode={currentEpisode}/>}
    </SafeAreaView>
}

export default EpisodePage;