import React, {createContext, FC, useEffect, useState} from "react";
import {ApiEpisodeProps, Episode} from "../types/Props";
import useApi from "../hooks/useApi";
import RickAndMortyApi from "../api/RickAndMortyApi";

export type EpisodeContextType = {
    episodes: Episode[] | undefined;
    error: boolean;
    loading: boolean;
    getEpisodes: () => void;
}

export const EpisodeContext = createContext<EpisodeContextType | null>(null);

export const EpisodeProvider: FC = ({children}) => {
    const [episodes, setEpisodes] = useState<Episode[]>();
    const {data: episode, error, loading, request: getAllEpisodes} = useApi<ApiEpisodeProps>(RickAndMortyApi.getAllEpisodes)

    useEffect(() => {
        getAllEpisodes().then(() => console.log("Fetched Characters to Context"))
    }, [])

    useEffect(() => {
        setEpisodes(episode?.results)
    }, [episode])

    const getEpisodes = () => {
        getAllEpisodes().then(() => console.log("Fetched API to Context"))
    }



    return (
        <EpisodeContext.Provider value={{episodes, error, loading, getEpisodes}}>
            {children}
        </EpisodeContext.Provider>
    )
}